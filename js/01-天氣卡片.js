// API授權碼 授權碼CWB-7ACB0A7A-2DF5-4A33-9C2C-CC9EC97B8596   
// https://opendata.cwb.gov.tw/user/authkey

// API查詢
// https://opendata.cwb.gov.tw/dist/opendata-swagger.html#/%E9%A0%90%E5%A0%B1/get_v1_rest_datastore_F_C0032_001

// Wx  :天氣現象
// MaxT:最高溫度
// MinT:最低溫度
// CI  :舒適度
// PoP :降雨機率

function getData(){
  let url =
  'https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=CWB-7ACB0A7A-2DF5-4A33-9C2C-CC9EC97B8596'

  let card = 'test';

  fetch(url)
  .then(function (response) {
    return response.json()
  })
  .then(function (data) {
    let location = data['records']['location'];
    location.forEach( x => {
      // console.log(x['locationName']);//縣市名
      // console.log(x['weatherElement'][0]['time'][0]['startTime']);//日期
      // console.log(x['weatherElement'][0]['time'][0]['parameter']['parameterName']);//日期
      
            //<label class="CI">舒適度:${x['weatherElement'][3]['time'][0]['parameter']['parameterName']}</label>
      card += `<div class="card">
                <label class="locationName">${x['locationName']}</label>
                <label class="date">${x['weatherElement'][0]['time'][0]['startTime']}</label>
                <label class="wx">${x['weatherElement'][0]['time'][0]['parameter']['parameterName']}</label>
                <label class="PoP">${x['weatherElement'][1]['time'][0]['parameter']['parameterName']}</label>
                <label class="MinT">${x['weatherElement'][2]['time'][0]['parameter']['parameterName']}</label>
                <label class="CI">${x['weatherElement'][3]['time'][0]['parameter']['parameterName']}</label>
                <label class="MaxT">${x['weatherElement'][4]['time'][0]['parameter']['parameterName']}</label>
              </div>`;
        // console.log(card);              
    });
    //console.log(card);  
    return card;
  });

  //此處取不到card的值???
  //console.log(card);
  //return card;
}