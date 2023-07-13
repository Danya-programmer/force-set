
const makeid = (length) => {
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return result;
}
 
 const backendPost = () => {
    const name = makeid(6);
    localStorage.setItem('name', JSON.stringify(name));
    const diet = {"name":  JSON.parse(localStorage.getItem('name')),"menu" : JSON.parse(localStorage.getItem('menu')), "age" : Number(JSON.parse(localStorage.getItem('age'))),
    "gender": JSON.parse(localStorage.getItem('gender')), "weight": Number(JSON.parse(localStorage.getItem('weight'))),
    "height": Number(JSON.parse(localStorage.getItem('height'))), "ratio": Number(JSON.parse(localStorage.getItem('ratio'))),
    "steps": Number(JSON.parse(localStorage.getItem('steps'))), "vegetables": JSON.parse(localStorage.getItem('vegetables')),
    "cereals": JSON.parse(localStorage.getItem('cereals')), "fruits": JSON.parse(localStorage.getItem('fruits')),
    "meat": JSON.parse(localStorage.getItem('meat')),
  };
    
    fetch("http://127.0.0.1:8000/api/v1/takefirstdata", {
        
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(diet),
      })
        .then((response) => response.json())
        .then((diet) => {

        console.log('Success:', diet);
      })
        .catch((error) => {
        console.error('Error:', error);
      });
}
export default backendPost






