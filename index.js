//add new item in shopping list when we submit with add item button
//apply a class to cross out the item when we check it
//delete item on delete click

"use strict";

// Function that adds our HTML when we have a new shopping list item

function addHtmlItem(entryItem) {
  return `
    <li>
    <span class="shopping-item">${entryItem}</span>
    <div class="shopping-item-controls">
        <button class="shopping-item-toggle">
            <span class="button-label">check</span>
        </button>
        <button class="shopping-item-delete">
            <span class="button-label">delete</span>
        </button>
    </div>
</li>
    `;
}

// DOM function

function main() {
  //add item to shopping list
  $("#js-shopping-list-form").submit(event => {
    event.preventDefault();

    let entryItem = $(".js-shopping-list-entry").val();
    $(".js-shopping-list-entry").val("");

    $(".shopping-list").append(addHtmlItem(entryItem));
  });

  //checking off item
  $(".shopping-list").on("click", ".shopping-item-toggle", event => {
    let currentCheckButton = $(event.currentTarget);

    let currentCheckSpan = $(currentCheckButton)
      .closest("div")
      .siblings(".shopping-item");

    currentCheckSpan.toggleClass("shopping-item__checked");
  });

  // delete item off of list

  $(".shopping-list").on("click", ".shopping-item-delete", event => {
    let currentDeleteButton = $(event.currentTarget);

    $(currentDeleteButton)
      .closest("li")
      .remove();
  });
}

$(main);
