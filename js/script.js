var items= [];
//console.log(shoppingList);

function addToList(){
  //console.log("this is prompt");
  var newItem= prompt ("What do you want to add to List?");
  console.log(newItem);
  if (newItem.length > 0) {
    document.getElementById("List").innerHTML += "<li>" +newItem+ "</li>";
    items.push(newItem);
    console.log(items);
  }else
  console.log("please enter a value");
}
