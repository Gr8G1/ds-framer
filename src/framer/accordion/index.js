// https:https://framer.com/m/Components-Accordion-xSXx.js
import { jsx as _jsx, jsxs as _jsxs, } from 'react/jsx-runtime';
import {
  addFonts,
  addPropertyControls,
  ControlType,
  cx,
  CycleVariantState,
  Image,
  RichText,
  useActiveVariantCallback,
  useLocaleInfo,
  useVariantState,
  withCSS,
} from 'installable-framer/dist/framer';
import { LayoutGroup, motion, MotionConfigContext, } from 'framer-motion';
import * as React from 'react';
var cycleOrder = ['JHOepHpI9', 'wn2nIeU3O',];
var variantClassNames = { JHOepHpI9: 'framer-v-7jm8qy', wn2nIeU3O: 'framer-v-1qmxl7x', };
function addPropertyOverrides(overrides, ...variants) {
  const nextOverrides = {};
  variants === null || variants === void 0
    ? void 0
    : variants.forEach((variant,) => variant && Object.assign(nextOverrides, overrides[variant],));
  return nextOverrides;
}
var transitions = {
  default: { damping: 60, delay: 0, mass: 1, stiffness: 500, type: 'spring', },
  wn2nIeU3O: { damping: 60, delay: 0, mass: 1, stiffness: 500, type: 'spring', },
};
var transition1 = { damping: 60, delay: 0, mass: 1, stiffness: 500, type: 'spring', };
var transformTemplate = (_, t,) => `translateX(-50%) ${t}`;
var Transition = ({ value, children, },) => {
  const config = React.useContext(MotionConfigContext,);
  const transition = value !== null && value !== void 0 ? value : config.transition;
  const contextValue = React.useMemo(() => ({ ...config, transition, }), [JSON.stringify(transition,),],);
  return /* @__PURE__ */ _jsx(MotionConfigContext.Provider, { value: contextValue, children, },);
};
var humanReadableVariantMap = { Close: 'JHOepHpI9', Open: 'wn2nIeU3O', };
var getProps = ({ category, contents, height, id, title, width, ...props },) => {
  var ref, ref1, _variant, ref2, ref3;
  return {
    ...props,
    ewOf1OdIM: (ref = title !== null && title !== void 0 ? title : props.ewOf1OdIM) !== null && ref !== void 0 ? ref : 'Title',
    mw_lhNYu_: (ref1 = category !== null && category !== void 0 ? category : props.mw_lhNYu_) !== null && ref1 !== void 0
      ? ref1
      : 'Category',
    variant:
      (ref2 = (_variant = humanReadableVariantMap[props.variant]) !== null && _variant !== void 0 ? _variant : props.variant) !== null &&
        ref2 !== void 0
        ? ref2
        : 'JHOepHpI9',
    wlEAVV33K: (ref3 = contents !== null && contents !== void 0 ? contents : props.wlEAVV33K) !== null && ref3 !== void 0
      ? ref3
      : 'Contents',
  };
};
var createLayoutDependency = (props, variants,) => variants.join('-',) + props.layoutDependency;
var Component = /* @__PURE__ */ React.forwardRef(function (props, ref,) {
  const { activeLocale, } = useLocaleInfo();
  const { style, className, layoutId, variant, mw_lhNYu_, ewOf1OdIM, wlEAVV33K, ...restProps } = getProps(props,);
  const { baseVariant, classNames, gestureVariant, setGestureState, setVariant, transition, variants, } = useVariantState({
    cycleOrder,
    defaultVariant: 'JHOepHpI9',
    transitions,
    variant,
    variantClassNames,
  },);
  const layoutDependency = createLayoutDependency(props, variants,);
  const { activeVariantCallback, delay, } = useActiveVariantCallback(baseVariant,);
  const onTapgnqhaj = activeVariantCallback(async (...args) => {
    setVariant(CycleVariantState,);
  },);
  const defaultLayoutId = React.useId();
  return /* @__PURE__ */ _jsx(LayoutGroup, {
    id: layoutId !== null && layoutId !== void 0 ? layoutId : defaultLayoutId,
    children: /* @__PURE__ */ _jsx(motion.div, {
      initial: variant,
      animate: variants,
      onHoverStart: () => setGestureState({ isHovered: true, },),
      onHoverEnd: () => setGestureState({ isHovered: false, },),
      onTapStart: () => setGestureState({ isPressed: true, },),
      onTap: () => setGestureState({ isPressed: false, },),
      onTapCancel: () => setGestureState({ isPressed: false, },),
      className: cx('framer-ElWr2', classNames,),
      style: { display: 'contents', },
      children: /* @__PURE__ */ _jsx(Transition, {
        value: transition,
        children: /* @__PURE__ */ _jsx(motion.div, {
          ...restProps,
          className: cx('framer-7jm8qy', className,),
          'data-framer-name': 'Close',
          layoutDependency,
          layoutId: 'JHOepHpI9',
          ref,
          style: { ...style, },
          ...addPropertyOverrides({ wn2nIeU3O: { 'data-framer-name': 'Open', }, }, baseVariant, gestureVariant,),
          children: /* @__PURE__ */ _jsx(Transition, {
            value: transition1,
            children: /* @__PURE__ */ _jsxs(motion.div, {
              className: 'framer-1v46gk9',
              'data-highlight': true,
              layoutDependency,
              layoutId: 'qQahDC0vK',
              onTap: onTapgnqhaj,
              children: [
                /* @__PURE__ */ _jsx(motion.div, {
                  className: 'framer-bv96z2',
                  'data-framer-name': 'Accordion',
                  layoutDependency,
                  layoutId: 'hoMGmCowH',
                  style: { backgroundColor: 'rgb(255, 255, 255)', },
                  children: /* @__PURE__ */ _jsxs(motion.div, {
                    className: 'framer-zlusxj',
                    'data-framer-name': 'Frame',
                    layoutDependency,
                    layoutId: 'OaQ2uuxhN',
                    children: [
                      /* @__PURE__ */ _jsx(RichText, {
                        __fromCanvasComponent: true,
                        children: /* @__PURE__ */ _jsx(React.Fragment, {
                          children: /* @__PURE__ */ _jsx(motion.p, {
                            style: {
                              '--font-selector': 'R0Y7QUJlZVplZS1yZWd1bGFy',
                              '--framer-font-family': '"ABeeZee", "ABeeZee Placeholder", sans-serif',
                              '--framer-letter-spacing': '-0.16px',
                              '--framer-line-height': '150%',
                              '--framer-text-color': 'var(--extracted-r6o4lv)',
                            },
                            children: 'Category',
                          },),
                        },),
                        className: 'framer-nzlyp6',
                        'data-framer-name': 'Category',
                        fonts: ['GF;ABeeZee-regular',],
                        layoutDependency,
                        layoutId: 'zHWW7id_A',
                        style: { '--extracted-r6o4lv': 'rgb(36, 36, 36)', '--framer-paragraph-spacing': '0px', },
                        text: mw_lhNYu_,
                        verticalAlignment: 'top',
                        withExternalLayout: true,
                      },),
                      /* @__PURE__ */ _jsx(RichText, {
                        __fromCanvasComponent: true,
                        children: /* @__PURE__ */ _jsx(React.Fragment, {
                          children: /* @__PURE__ */ _jsx(motion.p, {
                            style: {
                              '--font-selector': 'R0Y7QUJlZVplZS1yZWd1bGFy',
                              '--framer-font-family': '"ABeeZee", "ABeeZee Placeholder", sans-serif',
                              '--framer-letter-spacing': '-0.16px',
                              '--framer-line-height': '150%',
                              '--framer-text-color': 'var(--extracted-r6o4lv)',
                            },
                            children: '\uC2A4\uB0B524\uC758 \uC0C1\uD488 \uB0B4\uC5ED\uC774 \uBCF4\uACE0 \uC2F6\uC5B4\uC694. ',
                          },),
                        },),
                        className: 'framer-14z1fx1',
                        'data-framer-name': 'Question',
                        fonts: ['GF;ABeeZee-regular',],
                        layoutDependency,
                        layoutId: 'NTl61ly1Z',
                        style: { '--extracted-r6o4lv': 'rgb(36, 36, 36)', '--framer-paragraph-spacing': '0px', },
                        text: ewOf1OdIM,
                        verticalAlignment: 'top',
                        withExternalLayout: true,
                      },),
                      /* @__PURE__ */ _jsx(motion.div, {
                        className: 'framer-ntshqt',
                        layoutDependency,
                        layoutId: 'pw3oksCUR',
                        children: /* @__PURE__ */ _jsx(Image, {
                          background: {
                            alt: '',
                            fit: 'fill',
                            intrinsicHeight: 10,
                            intrinsicWidth: 16,
                            pixelHeight: 10,
                            pixelWidth: 16,
                            src:
                              new URL(
                                'assets/XevH3Sy9S1U9ABOG9mlIusWqtk.svg',
                                'https://framerusercontent.com/modules/vnjjq9iBq4KddZQJBE3l/9VsfVHslN3nkc7DAF3Da/sxFqL5kMu.js',
                              ).href,
                          },
                          className: 'framer-jd16xw',
                          'data-framer-name': 'Icon',
                          layoutDependency,
                          layoutId: 'wq15kmycU',
                          style: { rotate: 180, },
                          variants: { wn2nIeU3O: { rotate: 0, }, },
                        },),
                      },),
                    ],
                  },),
                },),
                /* @__PURE__ */ _jsx(motion.div, {
                  className: 'framer-1w2u7rb',
                  layoutDependency,
                  layoutId: 'szKI0uFD4',
                  style: { backgroundColor: 'rgb(247, 248, 250)', opacity: 0, },
                  transformTemplate,
                  variants: { wn2nIeU3O: { opacity: 1, }, },
                  ...addPropertyOverrides({ wn2nIeU3O: { transformTemplate: void 0, }, }, baseVariant, gestureVariant,),
                  children: /* @__PURE__ */ _jsx(motion.div, {
                    className: 'framer-j4c6ia',
                    'data-framer-name': 'Frame',
                    layoutDependency,
                    layoutId: 'JFFbfjs7R',
                    children: /* @__PURE__ */ _jsx(RichText, {
                      __fromCanvasComponent: true,
                      children: /* @__PURE__ */ _jsx(React.Fragment, {
                        children: /* @__PURE__ */ _jsx(motion.p, {
                          style: {
                            '--font-selector': 'Q1VTVE9NO1ByZXRlbmRhcmQgUmVndWxhcg==',
                            '--framer-font-family': '"Pretendard Regular", sans-serif',
                            '--framer-letter-spacing': '-0.16px',
                            '--framer-line-height': '150%',
                            '--framer-text-color': 'var(--extracted-r6o4lv)',
                          },
                          children:
                            '\uB124 \uC0C1\uD488 \uBC14\uB85C \uC548\uB0B4\uD574 \uB4DC\uB9AC\uACA0\uC2B5\uB2C8\uB2E4. \uC704\uD380 \uD648\uD398\uC774\uC9C0\uAC00\uC2DC\uBA74 \uC790\uC138\uD558\uAC8C \uBCF4\uC2E4\uC218 \uC788\uC2B5\uB2C8\uB2E4.',
                        },),
                      },),
                      className: 'framer-vkxr11',
                      'data-framer-name': 'Answer',
                      fonts: ['CUSTOM;Pretendard Regular',],
                      layoutDependency,
                      layoutId: 'ULA3cwAx9',
                      style: { '--extracted-r6o4lv': 'rgb(134, 144, 156)', '--framer-paragraph-spacing': '0px', },
                      text: wlEAVV33K,
                      verticalAlignment: 'top',
                      withExternalLayout: true,
                      ...addPropertyOverrides(
                        {
                          wn2nIeU3O: {
                            children: /* @__PURE__ */ _jsx(React.Fragment, {
                              children: /* @__PURE__ */ _jsx(motion.p, {
                                style: {
                                  '--font-selector': 'R0Y7QUJlZVplZS1yZWd1bGFy',
                                  '--framer-font-family': '"ABeeZee", "ABeeZee Placeholder", sans-serif',
                                  '--framer-letter-spacing': '-0.16px',
                                  '--framer-line-height': '150%',
                                  '--framer-text-color': 'var(--extracted-r6o4lv)',
                                },
                                children:
                                  '\uB124 \uC0C1\uD488 \uBC14\uB85C \uC548\uB0B4\uD574 \uB4DC\uB9AC\uACA0\uC2B5\uB2C8\uB2E4. \uC704\uD380 \uD648\uD398\uC774\uC9C0\uAC00\uC2DC\uBA74 \uC790\uC138\uD558\uAC8C \uBCF4\uC2E4\uC218 \uC788\uC2B5\uB2C8\uB2E4.',
                              },),
                            },),
                            fonts: ['GF;ABeeZee-regular',],
                          },
                        },
                        baseVariant,
                        gestureVariant,
                      ),
                    },),
                  },),
                },),
              ],
            },),
          },),
        },),
      },),
    },),
  },);
},);
var css = [
  '.framer-ElWr2 [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }',
  '@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }',
  '.framer-ElWr2 .framer-hz2nru { display: block; }',
  '.framer-ElWr2 .framer-7jm8qy { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px 0px 0px 0px; position: relative; width: 684px; }',
  '.framer-ElWr2 .framer-1v46gk9 { align-content: center; align-items: center; cursor: pointer; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: 684px; }',
  '.framer-ElWr2 .framer-bv96z2 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: min-content; }',
  '.framer-ElWr2 .framer-zlusxj { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: center; overflow: visible; padding: 16px 16px 16px 16px; position: relative; width: min-content; }',
  '.framer-ElWr2 .framer-nzlyp6 { flex: none; height: 24px; position: relative; white-space: pre-wrap; width: 94px; word-break: break-word; word-wrap: break-word; }',
  '.framer-ElWr2 .framer-14z1fx1 { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 518px; word-break: break-word; word-wrap: break-word; }',
  '.framer-ElWr2 .framer-ntshqt { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 24px; justify-content: center; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: 24px; }',
  '.framer-ElWr2 .framer-jd16xw { flex: none; height: 10px; overflow: visible; position: relative; width: 16px; }',
  '.framer-ElWr2 .framer-1w2u7rb { align-content: flex-end; align-items: flex-end; bottom: -40px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; left: 50%; overflow: hidden; padding: 24px 48px 24px 118px; position: absolute; width: 684px; z-index: -1; }',
  '.framer-ElWr2 .framer-j4c6ia { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: center; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: 1px; }',
  '.framer-ElWr2 .framer-vkxr11 { flex: 1 0 0px; height: auto; position: relative; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }',
  '@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-ElWr2 .framer-7jm8qy, .framer-ElWr2 .framer-1v46gk9, .framer-ElWr2 .framer-bv96z2, .framer-ElWr2 .framer-zlusxj, .framer-ElWr2 .framer-ntshqt, .framer-ElWr2 .framer-1w2u7rb, .framer-ElWr2 .framer-j4c6ia { gap: 0px; } .framer-ElWr2 .framer-7jm8qy > *, .framer-ElWr2 .framer-1v46gk9 > * { margin: 0px; margin-bottom: calc(0px / 2); margin-top: calc(0px / 2); } .framer-ElWr2 .framer-7jm8qy > :first-child, .framer-ElWr2 .framer-1v46gk9 > :first-child, .framer-ElWr2 .framer-bv96z2 > :first-child, .framer-ElWr2 .framer-ntshqt > :first-child { margin-top: 0px; } .framer-ElWr2 .framer-7jm8qy > :last-child, .framer-ElWr2 .framer-1v46gk9 > :last-child, .framer-ElWr2 .framer-bv96z2 > :last-child, .framer-ElWr2 .framer-ntshqt > :last-child { margin-bottom: 0px; } .framer-ElWr2 .framer-bv96z2 > * { margin: 0px; margin-bottom: calc(8px / 2); margin-top: calc(8px / 2); } .framer-ElWr2 .framer-zlusxj > * { margin: 0px; margin-left: calc(8px / 2); margin-right: calc(8px / 2); } .framer-ElWr2 .framer-zlusxj > :first-child, .framer-ElWr2 .framer-1w2u7rb > :first-child, .framer-ElWr2 .framer-j4c6ia > :first-child { margin-left: 0px; } .framer-ElWr2 .framer-zlusxj > :last-child, .framer-ElWr2 .framer-1w2u7rb > :last-child, .framer-ElWr2 .framer-j4c6ia > :last-child { margin-right: 0px; } .framer-ElWr2 .framer-ntshqt > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } .framer-ElWr2 .framer-1w2u7rb > * { margin: 0px; margin-left: calc(0px / 2); margin-right: calc(0px / 2); } .framer-ElWr2 .framer-j4c6ia > * { margin: 0px; margin-left: calc(40px / 2); margin-right: calc(40px / 2); } }',
  '.framer-ElWr2.framer-v-1qmxl7x .framer-1w2u7rb { bottom: unset; left: unset; position: relative; z-index: 1; }',
];
var FramersxFqL5kMu = withCSS(Component, css, 'framer-ElWr2',);
var stdin_default = FramersxFqL5kMu;
FramersxFqL5kMu.displayName = 'Components/Accordion';
FramersxFqL5kMu.defaultProps = { height: 56, width: 684, };
addPropertyControls(FramersxFqL5kMu, {
  variant: { options: ['JHOepHpI9', 'wn2nIeU3O',], optionTitles: ['Close', 'Open',], title: 'Variant', type: ControlType.Enum, },
  mw_lhNYu_: { defaultValue: 'Category', displayTextArea: false, title: 'Category', type: ControlType.String, },
  ewOf1OdIM: { defaultValue: 'Title', displayTextArea: false, title: 'Title', type: ControlType.String, },
  wlEAVV33K: { defaultValue: 'Contents', displayTextArea: false, title: 'Contents', type: ControlType.String, },
},);
addFonts(FramersxFqL5kMu, [{
  family: 'ABeeZee',
  moduleAsset: {
    localModuleIdentifier: 'local-module:canvasComponent/sxFqL5kMu:default',
    url: 'https://fonts.gstatic.com/s/abeezee/v22/esDR31xSG-6AGleN6tKukbcHCpE.ttf',
  },
  style: 'normal',
  url: 'https://fonts.gstatic.com/s/abeezee/v22/esDR31xSG-6AGleN6tKukbcHCpE.ttf',
  weight: '400',
},],);
var __FramerMetadata__ = {
  'exports': {
    'default': {
      'type': 'reactComponent',
      'name': 'FramersxFqL5kMu',
      'slots': [],
      'annotations': {
        'framerVariables': '{"mw_lhNYu_":"category","ewOf1OdIM":"title","wlEAVV33K":"contents"}',
        'framerIntrinsicWidth': '684',
        'framerCanvasComponentVariantDetails':
          '{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"wn2nIeU3O":{"layout":["fixed","auto"]}}}',
        'framerContractVersion': '1',
        'framerIntrinsicHeight': '56',
      },
    },
    'Props': { 'type': 'tsType', 'annotations': { 'framerContractVersion': '1', }, },
    '__FramerMetadata__': { 'type': 'variable', },
  },
};
export { __FramerMetadata__, stdin_default as default, };
