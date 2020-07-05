import {css} from 'lit-element';
export default css`:host{--rating-bar-font-family: var(--global-font-family);--rating-bar-font-weight: var(--font-weight-semi-bold);--rating-bar-background-color: var(--separator-01);--linear-bar-font-size: 1.6rem;--rating-bar-label-color: var(--primary-text)}.linear-bar{height:8px;background:var(--rating-bar-background-color);border-radius:25px}.linear-bar span{display:block;height:100%;border-top-right-radius:8px;border-bottom-right-radius:8px;border-top-left-radius:20px;border-bottom-left-radius:20px;box-shadow:inset 0 2px 9px rgba(255,255,255,0.3),inset 0 -2px 6px rgba(0,0,0,0.4)}.linear-bar-info{font-family:var(--rating-bar-font-family);font-weight:var(--rating-bar-font-weight);color:var(--rating-bar-label-color);display:flex;justify-content:space-between;margin-top:var(--spacing-03)}.donut-circle{width:40px;height:40px;margin:1em auto;border:4px solid transparent;border-radius:50%;position:relative;display:flex;justify-content:center;align-items:center;font-size:var(--rating-bar-linear-rating-info-font-size);color:var(--rating-bar-label-color)}`;