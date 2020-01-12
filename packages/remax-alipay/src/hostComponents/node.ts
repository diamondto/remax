import * as button from './Button/node';
import * as canvas from './Canvas/node';
import * as checkboxGroup from './CheckboxGroup/node';
import * as checkbox from './Checkbox/node';
import * as contactButton from './ContactButton/node';
import * as coverImage from './CoverImage/node';
import * as coverView from './CoverView/node';
import * as form from './Form/node';
import * as icon from './Icon/node';
import * as image from './Image/node';
import * as input from './Input/node';
import * as label from './Label/node';
import * as lifestyle from './Lifestyle/node';
import * as map from './Map/node';
import * as movableArea from './MovableArea/node';
import * as movableView from './MovableView/node';
import * as navigator from './Navigator/node';
import * as pickerViewColumn from './PickerViewColumn/node';
import * as pickerView from './PickerView/node';
import * as picker from './Picker/node';
import * as progress from './Progress/node';
import * as radioGroup from './RadioGroup/node';
import * as radio from './Radio/node';
import * as richText from './RichText/node';
import * as scrollView from './ScrollView/node';
import * as slider from './Slider/node';
import * as swiperItem from './SwiperItem/node';
import * as swiper from './Swiper/node';
import * as switchComponent from './Switch/node';
import * as text from './Text/node';
import * as textarea from './Textarea/node';
import * as view from './View/node';
import * as webView from './WebView/node';
import * as video from './Video/node';

const hostComponents = new Map();

hostComponents.set('button', button);
hostComponents.set('canvas', canvas);
hostComponents.set('checkbox-group', checkboxGroup);
hostComponents.set('checkbox', checkbox);
hostComponents.set('contact-button', contactButton);
hostComponents.set('cover-image', coverImage);
hostComponents.set('cover-view', coverView);
hostComponents.set('form', form);
hostComponents.set('icon', icon);
hostComponents.set('image', image);
hostComponents.set('input', input);
hostComponents.set('label', label);
hostComponents.set('lifestyle', lifestyle);
hostComponents.set('map', map);
hostComponents.set('movable-area', movableArea);
hostComponents.set('movable-view', movableView);
hostComponents.set('navigator', navigator);
hostComponents.set('picker-view-column', pickerViewColumn);
hostComponents.set('picker-view', pickerView);
hostComponents.set('picker', picker);
hostComponents.set('progress', progress);
hostComponents.set('radio-group', radioGroup);
hostComponents.set('radio', radio);
hostComponents.set('rich-text', richText);
hostComponents.set('scroll-view', scrollView);
hostComponents.set('slider', slider);
hostComponents.set('swiper-item', swiperItem);
hostComponents.set('swiper', swiper);
hostComponents.set('switch', switchComponent);
hostComponents.set('text', text);
hostComponents.set('textarea', textarea);
hostComponents.set('view', view);
hostComponents.set('web-view', webView);
hostComponents.set('video', video);

export default hostComponents;
