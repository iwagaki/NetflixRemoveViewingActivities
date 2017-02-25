var last_row_reactid = 0;

function deleteNextActivity() {
  if (last_row_reactid != 0) {
    var rows = document.querySelectorAll('.retableRow.retableRemoved[data-reactid]');
    var is_found = false;
    for (var i = 0; i < rows.length; i++) {
      row = rows[i];
      if (row.dataset.reactid == last_row_reactid) {
        if (row.getElementsByClassName('basic-spinner').length == 0) {
          is_found = true;
        }
      }
    }
    if (!is_found) {
      return;
    }
  }

  var elements = document.getElementsByClassName('deleteBtn');
  if (elements.length == 0) {
    return;
  }

  // console.log(elements);
  last_row_reactid = elements[0].parentElement.parentElement.dataset.reactid;
  // console.log(last_row_reactid);

  // elements[0].click();
  setTimeout(function() { elements[0].click() }, 100);
}

document.addEventListener('DOMSubtreeModified', deleteNextActivity);
deleteNextActivity();
