import Cycle from 'cyclejs';
import moment from 'moment';
import Immutable from 'immutable';
import OfficesMap from './offices-map';
import './time-counter';
let Rx = Cycle.Rx;
let h = Cycle.h;

function mergeStyles(...styleObjects) {
  let isTruthy = (x => !!x);
  return styleObjects.filter(isTruthy).reduce((styleA, styleB) => {
    let mapA = Immutable.Map(styleA);
    let mapB = Immutable.Map(styleB);
    return mapA.merge(mapB).toObject(); // notice B first
  }, {});
}

let model = Cycle.createModel(() => {
  let movingStarts = moment('2016-12-15 13:10');
  let movingEnds = moment('2017-02-15 12:00');
  if (moment().isAfter(movingEnds)) {
    movingStarts = moment().add(1, 'seconds');
    movingEnds = moment().add(10, 'seconds');
  }
  let totalDuration = moment.duration(movingEnds.diff(movingStarts)).asMinutes();

  let now$ = Rx.Observable.interval(100)
    .startWith(0)
    .map(() => moment())
    .publish().refCount();

  let floatProgress$ = now$.map(now => {
    let partialDuration = moment.duration(now.diff(movingStarts)).asMinutes();
    return Math.min(100, Math.max(0, (partialDuration / totalDuration) * 100));
  });

  let progress$ = floatProgress$.map(floatProgress => Math.floor(floatProgress));

  let showStreetView$ = progress$
    .filter(x => x === 100)
    .delay(2000)
    .map(() => true)
    .startWith(false);

  return {
    progress$,
    floatProgress$,
    showStreetView$,
    movingEnds$: Rx.Observable.just(movingEnds)
  };
});

let view = Cycle.createView(model => {
  let textStyle = {
    fontFamily: 'Open Sans',
    fontWeight: '800',
    color: '#02799E'
  };

  function renderHeader(progress) {
    return h('.row', [
      h('.col-md-4', [
        h('h3.text-left', {
          style: mergeStyles(
            textStyle, {
            margin: '10px 0'})},
          'Bulevardi 7')
      ]),
      h('.col-md-4', [
        h('h1.text-center', {
          style: mergeStyles(
            textStyle, {
            margin: '0 0 10px'})},
          `${progress}% there`)
      ]),
      h('.col-md-4', [
        h('h3.text-right', {
          style: mergeStyles(
            textStyle, {
            margin: '10px 0'})},
          'Ruoholahdenkatu 8')
      ])
    ]);
  }

  function renderProgressBar(progress, floatProgress) {
    return h('.row', [
      h('.col-md-12', [
        h('.progress', [
          h('.progress-bar.progress-bar-striped.active', {
            attributes: {
              role: 'progressbar',
              'aria-valuenow': String(progress),
              'aria-valuemin': '0',
              'aria-valuemax': '100',
            },
            style: {
              width: `${floatProgress}%`
            }},
            h('span.sr-only', `${progress}% Complete`)
          )
        ])
      ])
    ]);
  }

  function redirectToStreetView() {
    return window.location = 'https://www.google.fi/maps/place/mcare+Kamppi/@60.1660146,24.9284019,3a,75y,111.85h,100.05t/am=t/data=!3m7!1e1!3m5!1sEIDzYA0H8I9bwbPgsl7W-g!2e0!6s%2F%2Fgeo0.ggpht.com%2Fcbk%3Fpanoid%3DEIDzYA0H8I9bwbPgsl7W-g%26output%3Dthumbnail%26cb_client%3Dsearch.TACTILE.gps%26thumb%3D2%26w%3D234%26h%3D106%26yaw%3D110.015015%26pitch%3D0%26thumbfov%3D100!7i13312!8i6656!4m22!1m16!4m15!1m6!1m2!1s0x46920bca4af717c5:0x6f108d3234e6e6eb!2sBulevardi+7,+Helsinki!2m2!1d24.9382727!2d60.1650447!1m6!1m2!1s0x46920a353653936d:0x345e18617bb1a2d8!2sRuoholahdenkatu+8,+00101+Helsinki!2m2!1d24.9286804!2d60.1657893!3e1!3m4!1s0x0:0xfa6e17dde646c250!8m2!3d60.1659101!4d24.9287738!6m1!1e1';
  }

  let progressBoxContainerStyle = {
    width: '100vw',
    height: '50vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  };

  let progressBoxStyle = {
    width: '90%',
    position: 'relative',
    padding: '10px',
    borderRadius: '5px',
    boxShadow: '0 10px 40px 0 rgba(0,0,0,0.75)',
    backgroundColor: 'white'
  };

  return {
    vtree$: Rx.Observable.combineLatest(
      model.get('progress$'),
      model.get('floatProgress$'),
      model.get('movingEnds$'),
      model.get('showStreetView$'),
      (progress, floatProgress, movingEnds, showStreetView) =>
        showStreetView ? redirectToStreetView() :
          h('div', [
            new OfficesMap(floatProgress / 100.0),
            h('div', {style: progressBoxContainerStyle}, [
              h('div', {style: progressBoxStyle}, [
                renderHeader(progress),
                renderProgressBar(progress, floatProgress),
                progress < 100 ? h('time-counter', {textStyle, movingEnds}) : null
              ])
            ])
          ])
    )
  };
});

var user = Cycle.createDOMUser('.js-app');

user.inject(view).inject(model);
