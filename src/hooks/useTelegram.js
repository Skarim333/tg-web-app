const tg = window.Telegram.WebApp;


export function useTelegram() {
	
	const onClose = () => {
    tg.onClose
  }

	const onToggleButton = () => {
		if(tg.MainButton.isVisible) {
			tg.MainButton.hide();
		} else {
			tg.MainButton.show();
		}
  }
	return {
		onClose,
		onToggleButton,
		tg,
		user: tg.initDateUnsafe?.user,
	}
}