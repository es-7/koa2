const  axions = require('axios')

axions.post('https://e.xinrenxinshi.com/attendance/ajax-sign',{
    "longitude": 116.34654454257479,
    "latitude": 39.94006208537737,
    "accuracy": 65,
    "timestamp": +new Date(),
    "signature": "ckoxSqe660BdTRTV+NNkHg4koAQ=",
    "macAddr": "44:6a:2e:0a:f1:77"
},{
    withCredentials:true,
    headers:{
        'X-CSRF-TOKEN':'ZmUwNWFhMjNWBAZXBQIDUFFUAQRVAAoCBF0IAABRAlZRV1EMWVIAVg==',
        Cookie:{
            'sa_jssdk_2015e':'%7B%22distinct_id%22%3A%223885f5f807c543ec880fc24a8648be55%22%2C%22props%22%3A%7B%22%24latest_traffic_source_type%22%3A%22%E7%9B%B4%E6%8E%A5%E6%B5%81%E9%87%8F%22%2C%22%' +
                '24latest_referrer%22%3A%22%22%2C%22%24latest_referrer_host%22%3A%22%22%2C%22%24latest_search_keyword%22%3A%22%E6%9C%AA%E5%8F%96%E5%88%B0%E5%80%BC_%E7%9B%B4%E6%8E%A5%E6%89%93%E5%BC%80%2' +
                '2%7D%2C%22first_id%22%3A%2216be5cc205fdf-0ccd7bf6ed15748-3d11661f-304704-16be5cc2060f23%22%7D',
            'sa_jssdk_2015_e_xinrenxinshi_com':'%7B%22distinct_id%22%3A%223885f5f807c543ec880fc24a8648be55%22%2C%22first_id%22%3A%2216e1f4dc980449-05011502b95fdf-' +
                '8272807-304704-16e1f4dc981add%22%2C%22props%22%3A%7B%22%24latest_traffic_source_type%22%3A%22%E7%9B%B4%E6%8E%A5%E6%B5%81%E9%87%8F%22%2C%22%24latest_search_keyword%22' +
                '%3A%22%E6%9C%AA%E5%8F%96%E5%88%B0%E5%80%BC_%E7%9B%B4%E6%8E%A5%E6%89%93%E5%BC%80%22%2C%22%24latest_referrer%22%3A%22%22%7D%7D',
            'QJYDSID':'e546e038918e40279be8037095c81173_3885f5f807c543ec880fc24a8648be55',
            'sensorsdata2015jssdkcross':'%7B%22distinct_id%22%3A%223885f5f807c543ec880fc24a8648be55%22%2C%22%24device_id%22%3A%2216b9d1a709ee05-0fc1e6650' +
                '27523-3d11661f-304704-16b9d1a709feba%22%2C%22props%22%3A%7B%22%24latest_traffic_source_type%22%3A%22%E7%9B%B4%E6%8E%A5%E6%B5%81%E9%87%8F%22%2C%' +
                '22%24latest_referrer%22%3A%22%22%2C%22%24latest_referrer_host%22%3A%22%22%2C%22%24latest_search_keyword%22%3A%22%E6%9C%AA%E5%8F%96%E5%88%B0%E5%80%BC_%E7%9' +
                'B%B4%E6%8E%A5%E6%89%93%E5%BC%80%22%7D%2C%22first_id%22%3A%2216b9d1a709ee05-0fc1e665027523-3d11661f-304704-16b9d1a709feba%22%7D'
        },
    }
}).then((data)=>{
    console.log(data)
})





// module.exports = async ()=>{
//
//
//
//
//
// }
