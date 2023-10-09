const tg = Telegram.WebApp;

export function useTelegram() {
  const onClose = () => {
    tg.close();
  };
  const onToggleButton = () => {
    if (tg.MainButton.isVisible) {
      tg.MainButton.hide();
    } else {
      tg.MainButton.show();
    }
  };
  return {
    onClose,
    onToggleButton,
    tg,
    user: tg.initDataUnsafe?.user,
    //т.к. sendData не будет работать в случае inline кнопки (сайт)
    queryId: tg.initDataUnsafe?.query_id,
  };
}
