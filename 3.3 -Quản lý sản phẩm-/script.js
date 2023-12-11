var lp = document.getElementById("list-product");
var ab = document.getElementById("add-btn");
var db = document.getElementsByClassName("delete-product");
var np = document.getElementById("name-Product");
var nn = document.getElementById("new-name");
var en = document.getElementById("edit-name");
var bbg = document.getElementById("blur-bg");
var tp = document.getElementById("total-product");

const list_product = ["", "Cam", "Quýt", "Bưởi", "Chanh", "Tắc","Xoài", "Ổi", "Me", "Mận", "Sấu"];

function loadList()
{
    tp.innerHTML = `Tổng: ${list_product.length - 1}`
    for(i = 1; i < list_product.length; i++)
    {
        var id = "p-" + i;
        lp.appendChild(document.createElement("tr")).setAttribute("id", id);
        lp.lastChild.innerHTML = 
        `
            <td>${i}</td>
            <td>${list_product[i]}</td>
            <td>
                <button class="delete-product btn btn-danger btn-sm" onclick="deleteProduct(this)">Xóa</button>
                <button class="btn btn-primary btn-sm" onclick="editName(this)">Sửa</button>
            </td>
        `;
    }
}

loadList();
function deleteProduct(e)
{
    list_product.splice(e.parentNode.parentNode.firstElementChild.innerHTML, 1);
    lp.innerHTML = "";
    loadList();
}

var tmp = 0;
function editName(e)
{
    tmp = e.parentNode.parentNode.firstElementChild.innerHTML;
    bbg.classList.remove("hide-e");
    nn.value = list_product[tmp];
    en.classList.remove("hide-e");
}
function changeName(e)
{
    en.classList.add("hide-e");
    bbg.classList.add("hide-e");
    console.log(list_product[tmp]);
    list_product.splice(tmp, 1, nn.value);
    lp.innerHTML = "";
    loadList();
}
ab.addEventListener("click", () =>
{
    lp.innerHTML = ``;
    list_product.push(np.value);
    loadList();
    alert("Done");
})
