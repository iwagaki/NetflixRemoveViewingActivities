function deleteNextActivity() {
  if (document.getElementsByClassName('retableRow removing').length != 0) {
    return;
  }

  elements = document.getElementsByClassName('deleteBtn');
  if (elements.length == 0) {
    return;
  }

  console.log(elements);
  elements[0].click();
}

document.addEventListener('DOMSubtreeModified', deleteNextActivity);

deleteNextActivity();
