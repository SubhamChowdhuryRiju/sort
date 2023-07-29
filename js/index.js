$(document).ready(function () {
  $(".btn-danger").click(function () {
    var input = $("#number").val();

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

    var order = $("input[type = 'radio']:checked");

    if (order.length > 0) {
      if (order.val() == "asc") {
        asc_sort(nums);
        $("#result").html(
          "The Result after sorting in Ascending Order is : " + nums
        );
      } else if (order.val() == "dsc") {
        desc_sort(nums);
        $("#result").html(
          "The Result after sorting in Decending Order is : " + nums
        );
      }

      $("#result").css("visibility", "visible");
    } else {
      alert("Please Select an Option!!");
    }

    setTimeout(() => {
      window.location.reload();
    }, 10000);
    $("h1").html("<em>Enjoy!! The Sorted Array</em>");
  });
});

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
