var siteNameInput = document.getElementById('sName');
var siteUrlInput = document.getElementById('sUrl');
var siteContainer = [];
if (localStorage.getItem('site') == null) {
    siteContainer = [];
}
else {
    siteContainer = JSON.parse(localStorage.getItem('site'));
    addsite(siteContainer);
}


function siteobject() {
    var site = {
        name: siteNameInput.value,
        url: siteUrlInput.value,
    }
    clearform();
    siteContainer.push(site);
    addsite(siteContainer);
}

function clearform() {
    siteNameInput.value = null;
    siteUrlInput.value = null;
}

function addsite(arr) {
    var cartona = '';
    var arr;
    for (var i = 0; i < arr.length; i++) {
        cartona += ` <div class="websiteinfo1 bg bg-white px-1 mb-0 py-2 border-bottom border-secondary-subtle">
        <ul class="list-unstyled d-flex justify-content-between mb-0 align-items-center">
          <li class="text-center col-3">${1 + i}</li>
          <li class="text-center col-3">${arr[i].name}</li>
          <li class="text-center col-3"><button class="btn btn-success"><i class="fa-regular fa-eye pe-1"></i><a href="#${arr[i].url}" target="_blank" class="text-decoration-none text-white">Visit</a></button></li>
          <li class="text-center col-3"><button onclick="del(${i})" class="btn btn-danger"><i class="fa-solid fa-trash-can pe-1"></i>Delete</button></li>
        </ul>
      </div>`;
    }
    localStorage.setItem('site', JSON.stringify(siteContainer));
    document.getElementById('siteinfo').innerHTML = cartona;
}

function del(index) {
    var index;
    siteContainer.splice(index, 1);
    localStorage.setItem('site', JSON.stringify(siteContainer));
    addsite(siteContainer);
}



function validateinput(elem) {
    var regex = {
        sName: /^[a-z|A-Z]{3,}$/,
        sUrl: /^(www\.)?[a-z0-9\-.]{3,}(\.[a-z]{3})$/
    }

    if (regex[elem.id].test(elem.value) == true) {
        console.log('match');
        elem.classList.add('is-valid');
        elem.classList.remove('is-invalid');

    }

    else {
        elem.classList.remove('is-valid');
        elem.classList.add('is-invalid');
        console.log('no-match');
    }
}




