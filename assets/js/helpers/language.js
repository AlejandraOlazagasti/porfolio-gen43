const langToggleDOM = document.querySelector('#language-toggle');
const currentLang = window.location.href.includes('index-en.html');
langToggleDOM.checked = currentLang;

function changeLang() {
	langToggleDOM.addEventListener('change', () => {
		if (langToggleDOM.checked) {
			window.location.href = 'index-en.html';
		} else {
			window.location.href = 'index.html';
		}
	});
}

export default changeLang;
