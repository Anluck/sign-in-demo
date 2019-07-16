myButton.addEventListener('click', () => {
  let request = new XMLHttpRequest()
  request.open('get', '/xxx')
  request.onreadystatechange = () => {
    if(request.readyState === 4){
      if(request.status >= 200 && request.status < 300){
        console.log('说明请求成功')
        let string = request.responseText
        let object = JSON.parse(string)
        console.log(object)
      }else if(request.status >= 400){
        console.log('说明请求失败')
      }
    }
  }
  request.send()
})