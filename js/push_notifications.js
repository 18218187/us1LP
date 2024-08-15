const pn_params = new URL(location.href).searchParams;
const pn_is_active = pn_params.get('pn');

if (pn_is_active === 'true') {
	pn_idzone = 5077248;
	pn_sleep_seconds = 2;
	pn_is_self_hosted = 0;
	pn_soft_ask = 1;
	pn_filename = '/js/worker.js';
	pn_soft_ask_horizontal_position = 'left';
	pn_soft_ask_vertical_position = 'top';
	pn_soft_ask_title_enabled = 1;
	pn_soft_ask_title = 'Click ALLOW to continue';
	pn_soft_ask_description =
		'Receive notification when a girl replies to your messages. ';
	pn_soft_ask_yes = 'ALLOW';
	pn_soft_ask_no = 'No, Thanks';
}
