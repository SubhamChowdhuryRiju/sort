function sort() {
  var input = document.querySelector("#number").value;

  if (input === "") {
    alert("Please Enter Values!!!");
    return;
  }

  const nums = input.split(" ");

  var check = onlyNumbers(nums);

  if (check == true) {
    alert("Please Enter only Numbers!!!");
    return;
  }

  var order = document.querySelectorAll("#order");

  if (!order[0].checked && !order[1].checked) {
    alert("Please Select a option!");
    return;
  }

  for (let i = 0; i < order.length; i++) {
    if (order[i].checked) {
      desc_sort(nums);
      document.querySelector("#result").innerHTML =
        "The Result after sorting in Decending Order is : " + nums;
    } else {
      asc_sort(nums);
      document.querySelector("#result").innerHTML =
        "The Result after sorting in Ascending Order is : " + nums;
    }
  }
  document.querySelector("#result").style.visibility = "visible";
  setTimeout(() => {
    //document.querySelector("#result").style.visibility = "hidden";
    window.location.reload();
  }, 10000);
  document.querySelector("h1").innerHTML = "<em>Enjoy!! The Sorted Array</em>";
}

function asc_sort(nums) {
  for (let i = 1; i < nums.length; i++) {
    if (parseInt(nums[i]) < parseInt(nums[i - 1])) {
      var temp = nums[i];
      nums[i] = nums[i - 1];
      nums[i - 1] = temp;
      i = 0;
    }
  }
  return nums;
}

function desc_sort(nums) {
  for (let i = 1; i < nums.length; i++) {
    if (parseInt(nums[i]) > parseInt(nums[i - 1])) {
      var temp = nums[i];
      nums[i] = nums[i - 1];
      nums[i - 1] = temp;
      i = 0;
    }
  }
  return nums;
}

function onlyNumbers(array) {
  return array.every((element) => {
    return typeof element === "number";
  });
}
