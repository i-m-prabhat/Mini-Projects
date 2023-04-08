var collections = JSON.parse(window.localStorage.getItem('product_data')) || [];
var users = {};
var inputs = ['#name', '#description', '#price'];
var keys = ['name', 'description', 'price'];
(function ()
{
    loadRecords();
})();
function addProduct(e)
{
    inputs.forEach((item, index) =>
    {
        users[keys[index]] = $(item).value;
    });
    collections.push(users); //[]
    window.localStorage.setItem('product_data', JSON.stringify(collections));
    inputs.forEach((item, index) =>
    {
        $(item).value = "";
    })
    loadRecords();
    return false;
}
function $(elementName)
{
    return document.querySelector(elementName);
}
function loadRecords()
{
    let row = "";
    collections.forEach((user, index) =>
    {
        let sr_no = Number(index) + 1
        row = row + "<tr><td>" + sr_no + "</td><td>" + user.name + "</td><td>" + user.description + "</td><td>" + user.price + "</td><td><a href='" + user.pic + "' target='_blank'/><img src=' " + user.pic + "' height='100px' width='100px'/></td><td><a href='javascript: handleEdit(" + index + "); '>Edit</a> | <a href='javascript: handleDelete(" + index + "); '>Delete</a></td></tr>";
    });
    $('#pr_data').innerHTML = row;
}
function handleEdit(i)
{
    let currentUser = collections[i];
    inputs.forEach((item, index) =>
    {
        $(item).value = currentUser[keys[index]];
    })
    $('#submit').style.display = "none";
    $('#update').style.display = "block";
    $('#index').value = i;
}
function updateProduct()
{
    let index = $('#index').value;
    collections[index].name = $('#name').value;
    collections[index].description = $('#description').value;
    collections[index].price = $('#price').value;
    window.localStorage.setItem('product_data', JSON.stringify(collections))
    window.location.reload();
}
function handleDelete(index)
{
    if (window.confirm('Do you want to Delete this product?'))
    {
        collections.splice(index, 1);
        window.localStorage.setItem('product_data', JSON.stringify(collections));
        loadRecords();
    }
}
function productPic(object)
{
    console.log(object.files[0]);//File Blog Object 
    var reader = new FileReader();
    reader.addEventListener('load', function ()
    {
        users['pic'] = reader.result;
        console.log(collections)
    });
    reader.readAsDataURL(object.files[0]);
}