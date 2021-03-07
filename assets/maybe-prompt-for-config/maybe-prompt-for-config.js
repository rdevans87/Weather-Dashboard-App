const maybePromptForConfig = (fn, {
  localStorageKey = 'config',
  configSelector = '#config',
  propertySelector = 'property',
  appSelector = '#app',
} = {}) => {
  const hide = (el) => el.style.display = 'none';

  const show = (el) => el.style.display = 'block';

  const isFullyConfigured = (config, properties) => properties
    .reduce((c, p) => c && (config[p] !== undefined), true);

  const setConfigPropertyFromEl = (config, el) => () => config[el.dataset[propertySelector]] = el.value;

  const configUi = document.querySelector(configSelector);

  const appUi = document.querySelector(appSelector);

  const config = JSON.parse(window.localStorage.getItem(localStorageKey) || "{}");

  const continueWithApp = () => {
    hide(configUi);
    show(document.querySelector(appSelector));
    fn(config);
  }

  const propertyEls = Array.from(configUi.querySelectorAll(`[data-${propertySelector}]`));
  const properties = propertyEls.map((el) => el.dataset.property);

  if (isFullyConfigured(config, properties)) return continueWithApp();

  propertyEls.forEach((propertyEl) => {
    propertyEl.value = config[propertyEl.dataset.property] || '';
    propertyEl.addEventListener('change', setConfigPropertyFromEl(config, propertyEl));
  });

  const buttonEl = configUi.querySelector('button');
  buttonEl.addEventListener('click', () => {
    if (!isFullyConfigured(config, properties)) return;
    window.localStorage.setItem(localStorageKey, JSON.stringify(config));
    continueWithApp();
  });

  hide(appUi);
  show(configUi);
}
