var notifyClosed = true;
$(function () {
    $(document).on('deviceready', function () {
        cordova.plugins.BluetoothStatus.initPlugin();
        $.notifyDefaults({
            z_index: 100000000,
            placement: {
                from: 'top',
                align: 'center',
                onShow: function () {
                    notifyClosed = false;
                },
                onClosed: function() {
                    notifyClosed = true;
                }
            }
        });
//            document.addEventListener('offline', function () {
//                $.notify('インターネットに接続すると、データが読み込めるようになります');
//            }, false);

        // プラグインの仕様上、初期化直後はhasBTLEが必ずfalseになるためsetTimeout()
        setTimeout(function () {
            if (cordova.plugins.BluetoothStatus.hasBTLE) {
                if (!cordova.plugins.BluetoothStatus.BTenabled) {
                    $.notify({title: '現在地を表示しよう', message: 'Bluetoothをオンにすると現在地が利用できます'});
                }
            } else {
                $.notify('この機種は現在地の表示に対応していません');
            }
        }, 5000);
    });
});