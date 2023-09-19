// https:https://framer.com/m/Components-Banner-lnaZ.js
import { jsx as _jsx2, jsxs as _jsxs2, } from 'react/jsx-runtime';
import {
  addFonts as addFonts2,
  addPropertyControls as addPropertyControls2,
  ControlType as ControlType2,
  cx as cx2,
  getFonts,
  Image,
  RichText as RichText2,
  useLocaleInfo as useLocaleInfo2,
  useVariantState as useVariantState2,
  withCSS as withCSS2,
} from 'installable-framer/dist/framer';
import { LayoutGroup as LayoutGroup2, motion as motion2, MotionConfigContext as MotionConfigContext2, } from 'framer-motion';
import * as React2 from 'react';

// https:https://framerusercontent.com/modules/dEHm8D0Wc7VJ57WHpiqo/YPwYwxTs5GChfNtMsvZC/vgyOan2bg.js
import { jsx as _jsx, jsxs as _jsxs, } from 'react/jsx-runtime';
import {
  addFonts,
  addPropertyControls,
  ControlType,
  cx,
  RichText,
  useLocaleInfo,
  useVariantState,
  withCSS,
} from 'installable-framer/dist/framer';
import { LayoutGroup, motion, MotionConfigContext, } from 'framer-motion';
import * as React from 'react';
var enabledGestures = { cylqOnVDE: { hover: true, }, };
var cycleOrder = ['cylqOnVDE',];
var variantClassNames = { cylqOnVDE: 'framer-v-v0vqfi', };
function addPropertyOverrides(overrides, ...variants) {
  const nextOverrides = {};
  variants === null || variants === void 0
    ? void 0
    : variants.forEach((variant,) => variant && Object.assign(nextOverrides, overrides[variant],));
  return nextOverrides;
}
var transitions = { default: { damping: 60, delay: 0, mass: 1, stiffness: 500, type: 'spring', }, };
var equals = (a, b,) => {
  return typeof a === 'string' && typeof b === 'string' ? a.toLowerCase() === b.toLowerCase() : a === b;
};
var Transition = ({ value, children, },) => {
  const config = React.useContext(MotionConfigContext,);
  const transition = value !== null && value !== void 0 ? value : config.transition;
  const contextValue = React.useMemo(() => ({ ...config, transition, }), [JSON.stringify(transition,),],);
  return /* @__PURE__ */ _jsx(MotionConfigContext.Provider, { value: contextValue, children, },);
};
var getProps = ({ height, id, size, text, textColor, width, ...props },) => {
  var ref, ref1, ref2;
  return {
    ...props,
    Ff6HYvFzr: (ref = size !== null && size !== void 0 ? size : props.Ff6HYvFzr) !== null && ref !== void 0 ? ref : 'L',
    IFyxIV5f0: (ref1 = textColor !== null && textColor !== void 0 ? textColor : props.IFyxIV5f0) !== null && ref1 !== void 0
      ? ref1
      : 'rgb(0, 0, 0)',
    kKm_sfpo7: (ref2 = text !== null && text !== void 0 ? text : props.kKm_sfpo7) !== null && ref2 !== void 0 ? ref2 : 'Text',
  };
};
var createLayoutDependency = (props, variants,) => variants.join('-',) + props.layoutDependency;
var Component = /* @__PURE__ */ React.forwardRef(function (props, ref,) {
  const { activeLocale, } = useLocaleInfo();
  const { style, className, layoutId, variant, Ff6HYvFzr, kKm_sfpo7, IFyxIV5f0, ...restProps } = getProps(props,);
  const { baseVariant, classNames, gestureVariant, setGestureState, setVariant, transition, variants, } = useVariantState({
    cycleOrder,
    defaultVariant: 'cylqOnVDE',
    enabledGestures,
    transitions,
    variant,
    variantClassNames,
  },);
  const layoutDependency = createLayoutDependency(props, variants,);
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
      className: cx('framer-aRf0x', classNames,),
      style: { display: 'contents', },
      children: /* @__PURE__ */ _jsx(Transition, {
        value: transition,
        children: /* @__PURE__ */ _jsxs(motion.div, {
          ...restProps,
          className: cx('framer-v0vqfi', className,),
          'data-framer-name': 'Primary',
          layoutDependency,
          layoutId: 'cylqOnVDE',
          ref,
          style: {
            backgroundColor: 'rgb(255, 232, 75)',
            borderBottomLeftRadius: 6,
            borderBottomRightRadius: 6,
            borderTopLeftRadius: 6,
            borderTopRightRadius: 6,
            ...style,
          },
          variants: { 'cylqOnVDE-hover': { backgroundColor: 'rgb(255, 209, 68)', }, },
          ...addPropertyOverrides({ 'cylqOnVDE-hover': { 'data-framer-name': void 0, }, }, baseVariant, gestureVariant,),
          children: [
            equals(Ff6HYvFzr, 'L',) && /* @__PURE__ */ _jsx(motion.div, {
              className: 'framer-1sj2bn2',
              'data-framer-name': 'L',
              layoutDependency,
              layoutId: 'zSnRkfFXr',
              children: /* @__PURE__ */ _jsx(RichText, {
                __fromCanvasComponent: true,
                children: /* @__PURE__ */ _jsx(React.Fragment, {
                  children: /* @__PURE__ */ _jsx(motion.p, {
                    style: {
                      '--font-selector': 'Q1VTVE9NO1ByZXRlbmRhcmQgQm9sZA==',
                      '--framer-font-family': '"Pretendard Bold", sans-serif',
                      '--framer-font-size': '20px',
                      '--framer-letter-spacing': '-0.2px',
                      '--framer-line-height': '150%',
                      '--framer-text-color': 'var(--extracted-r6o4lv)',
                    },
                    children: 'Text',
                  },),
                },),
                className: 'framer-ujjb22',
                'data-framer-name': 'text',
                fonts: ['CUSTOM;Pretendard Bold',],
                layoutDependency,
                layoutId: 'LARRQPUu9',
                style: {
                  '--extracted-r6o4lv': 'var(--variable-reference-IFyxIV5f0-vgyOan2bg)',
                  '--framer-paragraph-spacing': '0px',
                  '--variable-reference-IFyxIV5f0-vgyOan2bg': IFyxIV5f0,
                },
                text: kKm_sfpo7,
                verticalAlignment: 'top',
                withExternalLayout: true,
              },),
            },),
            equals(Ff6HYvFzr, 'S',) && /* @__PURE__ */ _jsx(motion.div, {
              className: 'framer-11zlb58',
              'data-framer-name': 'S',
              layoutDependency,
              layoutId: 'MO72LJl4W',
              children: /* @__PURE__ */ _jsx(RichText, {
                __fromCanvasComponent: true,
                children: /* @__PURE__ */ _jsx(React.Fragment, {
                  children: /* @__PURE__ */ _jsx(motion.p, {
                    style: {
                      '--font-selector': 'Q1VTVE9NO1ByZXRlbmRhcmQgQm9sZA==',
                      '--framer-font-family': '"Pretendard Bold", sans-serif',
                      '--framer-letter-spacing': '-0.16px',
                      '--framer-line-height': '150%',
                      '--framer-text-color': 'var(--extracted-r6o4lv)',
                    },
                    children: 'Text',
                  },),
                },),
                className: 'framer-1sm6jul',
                'data-framer-name': 'text',
                fonts: ['CUSTOM;Pretendard Bold',],
                layoutDependency,
                layoutId: 'FJhpz7y0b',
                style: {
                  '--extracted-r6o4lv': 'var(--variable-reference-IFyxIV5f0-vgyOan2bg)',
                  '--framer-paragraph-spacing': '0px',
                  '--variable-reference-IFyxIV5f0-vgyOan2bg': IFyxIV5f0,
                },
                text: kKm_sfpo7,
                verticalAlignment: 'top',
                withExternalLayout: true,
              },),
            },),
            equals(Ff6HYvFzr, 'M',) && /* @__PURE__ */ _jsx(motion.div, {
              className: 'framer-1r9nlv6',
              'data-framer-name': 'M',
              layoutDependency,
              layoutId: 'lREZHDzzC',
              children: /* @__PURE__ */ _jsx(RichText, {
                __fromCanvasComponent: true,
                children: /* @__PURE__ */ _jsx(React.Fragment, {
                  children: /* @__PURE__ */ _jsx(motion.p, {
                    style: {
                      '--font-selector': 'Q1VTVE9NO1ByZXRlbmRhcmQgQm9sZA==',
                      '--framer-font-family': '"Pretendard Bold", sans-serif',
                      '--framer-letter-spacing': '-0.16px',
                      '--framer-line-height': '150%',
                      '--framer-text-color': 'var(--extracted-r6o4lv)',
                    },
                    children: 'Text',
                  },),
                },),
                className: 'framer-qt38lo',
                'data-framer-name': 'text',
                fonts: ['CUSTOM;Pretendard Bold',],
                layoutDependency,
                layoutId: 'OAryqkroi',
                style: {
                  '--extracted-r6o4lv': 'var(--variable-reference-IFyxIV5f0-vgyOan2bg)',
                  '--framer-paragraph-spacing': '0px',
                  '--variable-reference-IFyxIV5f0-vgyOan2bg': IFyxIV5f0,
                },
                text: kKm_sfpo7,
                verticalAlignment: 'top',
                withExternalLayout: true,
              },),
            },),
            equals(Ff6HYvFzr, 'XS',) && /* @__PURE__ */ _jsx(motion.div, {
              className: 'framer-usu36',
              'data-framer-name': 'XS',
              layoutDependency,
              layoutId: 'XN8XSYCSl',
              children: /* @__PURE__ */ _jsx(RichText, {
                __fromCanvasComponent: true,
                children: /* @__PURE__ */ _jsx(React.Fragment, {
                  children: /* @__PURE__ */ _jsx(motion.p, {
                    style: {
                      '--font-selector': 'Q1VTVE9NO1ByZXRlbmRhcmQgQm9sZA==',
                      '--framer-font-family': '"Pretendard Bold", sans-serif',
                      '--framer-font-size': '14px',
                      '--framer-letter-spacing': '-0.14px',
                      '--framer-line-height': '150%',
                      '--framer-text-color': 'var(--extracted-r6o4lv)',
                    },
                    children: 'Text',
                  },),
                },),
                className: 'framer-u23h0z',
                'data-framer-name': 'text',
                fonts: ['CUSTOM;Pretendard Bold',],
                layoutDependency,
                layoutId: 'KHd0uxX_C',
                style: {
                  '--extracted-r6o4lv': 'var(--variable-reference-IFyxIV5f0-vgyOan2bg)',
                  '--framer-paragraph-spacing': '0px',
                  '--variable-reference-IFyxIV5f0-vgyOan2bg': IFyxIV5f0,
                },
                text: kKm_sfpo7,
                verticalAlignment: 'top',
                withExternalLayout: true,
              },),
            },),
            equals(Ff6HYvFzr, '2XS',) && /* @__PURE__ */ _jsx(motion.div, {
              className: 'framer-ne5ouf',
              'data-framer-name': '2XS',
              layoutDependency,
              layoutId: 'VcJ20uPfQ',
              children: /* @__PURE__ */ _jsx(RichText, {
                __fromCanvasComponent: true,
                children: /* @__PURE__ */ _jsx(React.Fragment, {
                  children: /* @__PURE__ */ _jsx(motion.p, {
                    style: {
                      '--font-selector': 'Q1VTVE9NO1ByZXRlbmRhcmQgQm9sZA==',
                      '--framer-font-family': '"Pretendard Bold", sans-serif',
                      '--framer-font-size': '12px',
                      '--framer-letter-spacing': '-0.12px',
                      '--framer-line-height': '150%',
                      '--framer-text-color': 'var(--extracted-r6o4lv)',
                    },
                    children: 'Text',
                  },),
                },),
                className: 'framer-qzkd5c',
                'data-framer-name': 'text',
                fonts: ['CUSTOM;Pretendard Bold',],
                layoutDependency,
                layoutId: 'fEjoBqtof',
                style: {
                  '--extracted-r6o4lv': 'var(--variable-reference-IFyxIV5f0-vgyOan2bg)',
                  '--framer-paragraph-spacing': '0px',
                  '--variable-reference-IFyxIV5f0-vgyOan2bg': IFyxIV5f0,
                },
                text: kKm_sfpo7,
                verticalAlignment: 'top',
                withExternalLayout: true,
              },),
            },),
          ],
        },),
      },),
    },),
  },);
},);
var css = [
  '.framer-aRf0x [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }',
  '@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }',
  '.framer-aRf0x .framer-cnnnh3 { display: block; }',
  '.framer-aRf0x .framer-v0vqfi { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: hidden; padding: 0px 0px 0px 0px; position: relative; width: min-content; will-change: var(--framer-will-change-override, transform); }',
  '.framer-aRf0x .framer-1sj2bn2 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 4px; height: min-content; justify-content: center; overflow: hidden; padding: 16px 32px 16px 32px; position: relative; width: min-content; }',
  '.framer-aRf0x .framer-ujjb22, .framer-aRf0x .framer-1sm6jul, .framer-aRf0x .framer-qt38lo, .framer-aRf0x .framer-u23h0z, .framer-aRf0x .framer-qzkd5c { flex: none; height: auto; position: relative; white-space: pre; width: auto; }',
  '.framer-aRf0x .framer-11zlb58 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 4px; height: 40px; justify-content: center; overflow: hidden; padding: 8px 12px 8px 12px; position: relative; width: 65px; }',
  '.framer-aRf0x .framer-1r9nlv6 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 4px; height: min-content; justify-content: center; overflow: hidden; padding: 12px 24px 12px 24px; position: relative; width: min-content; }',
  '.framer-aRf0x .framer-usu36, .framer-aRf0x .framer-ne5ouf { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 4px; height: min-content; justify-content: center; overflow: hidden; padding: 6px 10px 6px 10px; position: relative; width: min-content; }',
  '.framer-aRf0x .framer-v-v0vqfi .framer-v0vqfi { cursor: pointer; }',
  '@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-aRf0x .framer-v0vqfi, .framer-aRf0x .framer-1sj2bn2, .framer-aRf0x .framer-11zlb58, .framer-aRf0x .framer-1r9nlv6, .framer-aRf0x .framer-usu36, .framer-aRf0x .framer-ne5ouf { gap: 0px; } .framer-aRf0x .framer-v0vqfi > * { margin: 0px; margin-bottom: calc(0px / 2); margin-top: calc(0px / 2); } .framer-aRf0x .framer-v0vqfi > :first-child { margin-top: 0px; } .framer-aRf0x .framer-v0vqfi > :last-child { margin-bottom: 0px; } .framer-aRf0x .framer-1sj2bn2 > *, .framer-aRf0x .framer-11zlb58 > *, .framer-aRf0x .framer-1r9nlv6 > *, .framer-aRf0x .framer-usu36 > *, .framer-aRf0x .framer-ne5ouf > * { margin: 0px; margin-left: calc(4px / 2); margin-right: calc(4px / 2); } .framer-aRf0x .framer-1sj2bn2 > :first-child, .framer-aRf0x .framer-11zlb58 > :first-child, .framer-aRf0x .framer-1r9nlv6 > :first-child, .framer-aRf0x .framer-usu36 > :first-child, .framer-aRf0x .framer-ne5ouf > :first-child { margin-left: 0px; } .framer-aRf0x .framer-1sj2bn2 > :last-child, .framer-aRf0x .framer-11zlb58 > :last-child, .framer-aRf0x .framer-1r9nlv6 > :last-child, .framer-aRf0x .framer-usu36 > :last-child, .framer-aRf0x .framer-ne5ouf > :last-child { margin-right: 0px; } }',
];
var FramervgyOan2bg = withCSS(Component, css, 'framer-aRf0x',);
var stdin_default = FramervgyOan2bg;
FramervgyOan2bg.displayName = 'Components/Buttons';
FramervgyOan2bg.defaultProps = { height: 62, width: 120, };
addPropertyControls(FramervgyOan2bg, {
  Ff6HYvFzr: { defaultValue: 'L', placeholder: 'L, M, S, XS, 2XS', title: 'Size', type: ControlType.String, },
  kKm_sfpo7: { defaultValue: 'Text', displayTextArea: false, title: 'Text', type: ControlType.String, },
  IFyxIV5f0: { defaultValue: 'rgb(0, 0, 0)', title: 'TextColor', type: ControlType.Color, },
},);
addFonts(FramervgyOan2bg, [],);

// https:https://framer.com/m/Components-Banner-lnaZ.js
var ComponentsButtonsFonts = getFonts(stdin_default,);
var cycleOrder2 = ['JVmqljt4v',];
var variantClassNames2 = { JVmqljt4v: 'framer-v-nrqr22', };
var transitions2 = { default: { damping: 60, delay: 0, mass: 1, stiffness: 500, type: 'spring', }, };
var toResponsiveImage = (value,) => {
  if (typeof value === 'object' && value !== null && typeof value.src === 'string') {
    return value;
  }
  return typeof value === 'string' ? { src: value, } : void 0;
};
var Transition2 = ({ value, children, },) => {
  const config = React2.useContext(MotionConfigContext2,);
  const transition = value !== null && value !== void 0 ? value : config.transition;
  const contextValue = React2.useMemo(() => ({ ...config, transition, }), [JSON.stringify(transition,),],);
  return /* @__PURE__ */ _jsx2(MotionConfigContext2.Provider, { value: contextValue, children, },);
};
var getProps2 = ({ buttonSize, buttonText, buttonTextColor, height, id, image, title, titleColor, width, ...props },) => {
  var ref, ref1, ref2, ref3, ref4;
  return {
    ...props,
    B7LkOznp2: (ref = title !== null && title !== void 0 ? title : props.B7LkOznp2) !== null && ref !== void 0 ? ref : 'Title ',
    bLVqAejlK: (ref1 = titleColor !== null && titleColor !== void 0 ? titleColor : props.bLVqAejlK) !== null && ref1 !== void 0
      ? ref1
      : 'rgb(0, 0, 0)',
    BWbB_0xhH:
      (ref2 = buttonTextColor !== null && buttonTextColor !== void 0 ? buttonTextColor : props.BWbB_0xhH) !== null && ref2 !== void 0
        ? ref2
        : 'rgb(0, 0, 0)',
    cTT_9ZQZu: (ref3 = buttonText !== null && buttonText !== void 0 ? buttonText : props.cTT_9ZQZu) !== null && ref3 !== void 0
      ? ref3
      : 'Text',
    jiUgOv3oh: (ref4 = buttonSize !== null && buttonSize !== void 0 ? buttonSize : props.jiUgOv3oh) !== null && ref4 !== void 0
      ? ref4
      : '2XS',
    OTFIo4t3k: image !== null && image !== void 0 ? image : props.OTFIo4t3k,
  };
};
var createLayoutDependency2 = (props, variants,) => variants.join('-',) + props.layoutDependency;
var Component2 = /* @__PURE__ */ React2.forwardRef(function (props, ref,) {
  const { activeLocale, } = useLocaleInfo2();
  const { style, className, layoutId, variant, OTFIo4t3k, B7LkOznp2, bLVqAejlK, jiUgOv3oh, cTT_9ZQZu, BWbB_0xhH, ...restProps } = getProps2(
    props,
  );
  const { baseVariant, classNames, gestureVariant, setGestureState, setVariant, transition, variants, } = useVariantState2({
    cycleOrder: cycleOrder2,
    defaultVariant: 'JVmqljt4v',
    transitions: transitions2,
    variant,
    variantClassNames: variantClassNames2,
  },);
  const layoutDependency = createLayoutDependency2(props, variants,);
  const defaultLayoutId = React2.useId();
  return /* @__PURE__ */ _jsx2(LayoutGroup2, {
    id: layoutId !== null && layoutId !== void 0 ? layoutId : defaultLayoutId,
    children: /* @__PURE__ */ _jsx2(motion2.div, {
      initial: variant,
      animate: variants,
      onHoverStart: () => setGestureState({ isHovered: true, },),
      onHoverEnd: () => setGestureState({ isHovered: false, },),
      onTapStart: () => setGestureState({ isPressed: true, },),
      onTap: () => setGestureState({ isPressed: false, },),
      onTapCancel: () => setGestureState({ isPressed: false, },),
      className: cx2('framer-j4N7K', classNames,),
      style: { display: 'contents', },
      children: /* @__PURE__ */ _jsx2(Transition2, {
        value: transition,
        children: /* @__PURE__ */ _jsx2(Image, {
          ...restProps,
          background: { alt: '', fit: 'fill', sizes: 'min(1158px, 100vw)', ...toResponsiveImage(OTFIo4t3k,), },
          className: cx2('framer-nrqr22', className,),
          'data-border': true,
          'data-framer-name': 'Wide',
          layoutDependency,
          layoutId: 'JVmqljt4v',
          ref,
          style: {
            '--border-bottom-width': '1px',
            '--border-color': 'rgb(34, 34, 34)',
            '--border-left-width': '1px',
            '--border-right-width': '1px',
            '--border-style': 'solid',
            '--border-top-width': '1px',
            borderBottomLeftRadius: 8,
            borderBottomRightRadius: 8,
            borderTopLeftRadius: 8,
            borderTopRightRadius: 8,
            ...style,
          },
          children: /* @__PURE__ */ _jsx2(motion2.div, {
            className: 'framer-1enh5b3',
            layoutDependency,
            layoutId: 'yKgTZqUdK',
            children: /* @__PURE__ */ _jsxs2(motion2.div, {
              className: 'framer-18kst3e',
              'data-framer-name': 'Text',
              layoutDependency,
              layoutId: 'i5HuklUMY',
              children: [
                /* @__PURE__ */ _jsx2(RichText2, {
                  __fromCanvasComponent: true,
                  children: /* @__PURE__ */ _jsx2(React2.Fragment, {
                    children: /* @__PURE__ */ _jsx2(motion2.p, {
                      style: {
                        '--font-selector': 'Q1VTVE9NO1ByZXRlbmRhcmQgQmxhY2s=',
                        '--framer-font-family': '"Pretendard Black", sans-serif',
                        '--framer-font-size': '32px',
                        '--framer-letter-spacing': '-0.32px',
                        '--framer-line-height': '150%',
                        '--framer-text-color': 'var(--extracted-r6o4lv)',
                      },
                      children: 'Title ',
                    },),
                  },),
                  className: 'framer-1wh0o4u',
                  'data-framer-name': 'Title',
                  fonts: ['CUSTOM;Pretendard Black',],
                  layoutDependency,
                  layoutId: 'JIrEOUL0M',
                  style: {
                    '--extracted-r6o4lv': 'var(--variable-reference-bLVqAejlK-E2D7LA_9g)',
                    '--framer-paragraph-spacing': '0px',
                    '--variable-reference-bLVqAejlK-E2D7LA_9g': bLVqAejlK,
                  },
                  text: B7LkOznp2,
                  verticalAlignment: 'top',
                  withExternalLayout: true,
                },),
                /* @__PURE__ */ _jsx2(motion2.div, {
                  className: 'framer-1i7as81-container',
                  'data-framer-name': 'Buttons',
                  layoutDependency,
                  layoutId: 'N8NHPo5Gb-container',
                  name: 'Buttons',
                  children: /* @__PURE__ */ _jsx2(stdin_default, {
                    height: '100%',
                    id: 'N8NHPo5Gb',
                    layoutId: 'N8NHPo5Gb',
                    name: 'Buttons',
                    size: jiUgOv3oh,
                    text: cTT_9ZQZu,
                    textColor: BWbB_0xhH,
                    width: '100%',
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
var css2 = [
  '.framer-j4N7K [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }',
  '@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }',
  '.framer-j4N7K .framer-ihxe4z { display: block; }',
  '.framer-j4N7K .framer-nrqr22 { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 200px; justify-content: center; overflow: hidden; padding: 0px 0px 0px 0px; position: relative; width: 1158px; will-change: var(--framer-will-change-override, transform); }',
  '.framer-j4N7K .framer-1enh5b3 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 100%; justify-content: center; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: 89%; }',
  '.framer-j4N7K .framer-18kst3e { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: center; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: 100%; }',
  '.framer-j4N7K .framer-1wh0o4u { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }',
  '.framer-j4N7K .framer-1i7as81-container { flex: none; height: auto; position: relative; width: auto; }',
  '@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-j4N7K .framer-nrqr22, .framer-j4N7K .framer-1enh5b3, .framer-j4N7K .framer-18kst3e { gap: 0px; } .framer-j4N7K .framer-nrqr22 > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } .framer-j4N7K .framer-nrqr22 > :first-child, .framer-j4N7K .framer-18kst3e > :first-child { margin-top: 0px; } .framer-j4N7K .framer-nrqr22 > :last-child, .framer-j4N7K .framer-18kst3e > :last-child { margin-bottom: 0px; } .framer-j4N7K .framer-1enh5b3 > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-j4N7K .framer-1enh5b3 > :first-child { margin-left: 0px; } .framer-j4N7K .framer-1enh5b3 > :last-child { margin-right: 0px; } .framer-j4N7K .framer-18kst3e > * { margin: 0px; margin-bottom: calc(8px / 2); margin-top: calc(8px / 2); } }',
];
var FramerE2D7LA_9g = withCSS2(Component2, css2, 'framer-j4N7K',);
var stdin_default2 = FramerE2D7LA_9g;
FramerE2D7LA_9g.displayName = 'Components/Banner';
FramerE2D7LA_9g.defaultProps = { height: 200, width: 1158, };
addPropertyControls2(FramerE2D7LA_9g, {
  OTFIo4t3k: { title: 'Image', type: ControlType2.ResponsiveImage, },
  B7LkOznp2: { defaultValue: 'Title ', displayTextArea: false, title: 'Title', type: ControlType2.String, },
  bLVqAejlK: { defaultValue: 'rgb(0, 0, 0)', title: 'TitleColor', type: ControlType2.Color, },
  jiUgOv3oh: { defaultValue: '2XS', placeholder: 'L, M, S, XS, 2XS', title: 'ButtonSize', type: ControlType2.String, },
  cTT_9ZQZu: { defaultValue: 'Text', displayTextArea: false, title: 'ButtonText', type: ControlType2.String, },
  BWbB_0xhH: { defaultValue: 'rgb(0, 0, 0)', title: 'ButtonTextColor', type: ControlType2.Color, },
},);
addFonts2(FramerE2D7LA_9g, [...ComponentsButtonsFonts,],);
var __FramerMetadata__ = {
  'exports': {
    'default': {
      'type': 'reactComponent',
      'name': 'FramerE2D7LA_9g',
      'slots': [],
      'annotations': {
        'framerIntrinsicWidth': '1158',
        'framerContractVersion': '1',
        'framerCanvasComponentVariantDetails': '{"propertyName":"variant","data":{"default":{"layout":["fixed","fixed"]}}}',
        'framerIntrinsicHeight': '200',
        'framerVariables':
          '{"OTFIo4t3k":"image","B7LkOznp2":"title","bLVqAejlK":"titleColor","jiUgOv3oh":"buttonSize","cTT_9ZQZu":"buttonText","BWbB_0xhH":"buttonTextColor"}',
      },
    },
    'Props': { 'type': 'tsType', 'annotations': { 'framerContractVersion': '1', }, },
    '__FramerMetadata__': { 'type': 'variable', },
  },
};
export { __FramerMetadata__, stdin_default2 as default, };
