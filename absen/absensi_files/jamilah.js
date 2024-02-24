	var months = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember", ];

	function display_ct5() {
		var x = new Date()
		var ampm = x.getHours() >= 12 ? ' PM' : ' AM';
		var x1 = x.getDate() + " " + months[x.getMonth()] + " " + x.getFullYear();
		x1 = x1 + " - " + add_zero_leading(x.getHours()) + ":" + add_zero_leading(x.getMinutes()) + ":" + add_zero_leading(x.getSeconds()) + ":" + ampm;
		document.getElementById('ct').innerHTML = x1;
		display_c5();
	}

	function display_c5() {
		var refresh = 1000; // Refresh rate in milli seconds
		mytime = setTimeout('display_ct5()', refresh)
	}

	function add_zero_leading(secs) {
		if(secs < 10) {
			return "0" + secs;
		}
		return secs;
	}
	display_ct5();

	function _openOffice(id) {
		officeSelected = id;
		// document.querySelector(".qrlist").style.display = 'none';
		// document.querySelector("#box").style.display = 'none';
		// document.querySelector("#qr-"+id).style.display = 'block';
		$(`#box`).hide();
		$(`.qrlist`).hide();
		$(`#appendQr`).show();
		$(`#qr-${id}`).show();
	}
	let officeSelected = null;
	const host_url = "http://103.9.125.68:8017/"
	document.addEventListener("DOMContentLoaded", function(event) {
		const params = new Proxy(new URLSearchParams(window.location.search), {
			get: (searchParams, prop) => searchParams.get(prop),
		});
		let _office = params.office;
		if(_office && _office != 'null') {
			officeSelected = _office;
			// _openOffice(_office)
		}
		$("#appendQr").load(host_url + "v1/absensi/absen/qrcode").hide();
	});
	setInterval(function() {
		if(officeSelected) {
			$("#appendQr").load(host_url + "/v1/absensi/absen/qrcode?officeId=" + officeSelected);
		}
	}, 2000)