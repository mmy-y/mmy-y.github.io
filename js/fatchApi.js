// 使用ajax 请求一个地址 请求方式是post  'https://wangzhan.qianxin.com/report/get_dafebase_data'
// 请求的参数是 domain=mmy66.cc&host_base64=QA%3D%3D&host=%40&type=today&visit_status=s
// 请求头是  'Content-Type': 'application/x-www-form-urlencoded'
// 请求成功后的回调函数
// 1. 通过id获取到welcome-info1元素
// 2. 通过id获取到welcome-info2元素
// 3. 将请求成功后的数据渲染到welcome-info1元素中
// 4. 将请求成功后的数据渲染到welcome-info2元素中

let xhr = new XMLHttpRequest();
xhr.open('get', 'https://m.hsxbk.top/project/api/get_safe.php');
xhr.send();
xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
        let data = JSON.parse(xhr.responseText);
        let welcomeInfo1 = document.getElementById('welcome-info1');
        let welcomeInfo2 = document.getElementById('welcome-info2');

        console.log(data)
        welcomeInfo1.innerHTML = `成功访问次数：<b style="color:#c4d9f7">${data.res.visit}</b>`; 
        welcomeInfo2.innerHTML = `恶意攻击次数：<b style="color:#c4d9f7">${data.res.totalcount}</b>`; 
    }
}
