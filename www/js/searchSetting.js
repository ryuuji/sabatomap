var searchSetting = {
    queryText: '', // デモ用キーワード 設定すると自動的に検索する
    targetId: "Fukui_Sabae",
    targets: [
        {
            "id": "Fukui_Sabae", //一意のID
            "name": "鯖江市図書館",
            "module": "api",
            "libid": 100622,
            "params": {"prefix": "", "systemid": "Fukui_Sabae"},
            "clickHandler":  function (data) {
                if (typeof data.shelfId != 'undefined') {
                    kLayer.setFloorId(data.floorId);
                    kLayer.setTargetShelf(data.shelfId);
                    //setVectorPoint(data.floorId, data.shelfId);
                }else{
                    kLayer.setTargetShelf(null);
                }
            }
        }
    ]
}