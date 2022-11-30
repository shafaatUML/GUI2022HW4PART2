// JQuery and JS file to generate the table, implement sliders, and attempt to implement tab functionality
// - Shafaat Osmani Shafaat_Osmani@student.uml.edu

$("#multform").validate({
  // sourced from: https://jqueryvalidation.org/range-method/
  // and: https://jqueryvalidation.org/rules/
  rules: {
    minX: {
      required: true,
      range: [-50, 50]
    },
    maxX: {
      required: true,
      range: [-50, 50]
    },
    minY: {
      required: true,
      range: [-50, 50]
    },
    maxY: {
      required: true,
      range: [-50, 50]
    }
  },
  
  messages: {
    minX: {
      required: "Please enter a minX",
      range: "Input must be from -50 to 50"
    },
    maxX: {
      required: "Please enter a maxX",
      range: "Input must be from -50 to 50"
    },
    minY: {
      required: "Please enter a minY",
      range: "Input must be from -50 to 50"
    },
    maxY: {
      required: "Please enter a maxY",
      range: "Input must be from -50 to 50"
    }
  }
});

// checks if form passes validation, if yes then
// create the table  
$("#multform").submit(function (event) {
  event.preventDefault();
  if ($("#multform").valid()) {
    createtable();
  }
});
  
// sourced from: https://jesseheines.com/~heines/91.461/91.461-2015-16f/461-assn/jQueryUI1.8_Ch03_TabsWidget.pdf
// and: https://jesseheines.com/~heines/91.461/91.461-2015-16f/461-assn/jQueryUI1.8_Ch06_SliderWidget.pdf
$( function() {

  $("#minXslider").slider({
    min: -50,
    max: 50,
    value: 0,
    slide: function( event, ui ) {
      $("#minX").val( ui.value );  
    }
  });

  $("#maxXslider").slider({
    min: -50,
    max: 50,
    value: 0,
    slide: function( event, ui ) {
      $("#maxX").val( ui.value );  
    }
  });

  $("#minYslider").slider({
    min: -50,
    max: 50,
    value: 0,
    slide: function( event, ui ) {
      $("#minY").val( ui.value );  
    }
  });

  $("#maxYslider").slider({
    min: -50,
    max: 50,
    value: 0,
    slide: function( event, ui ) {
      $("#maxY").val( ui.value );  
    }
  });
});

(function($){
    $("#myTabs").tabs();

    $("#remove").click(function() {
        $("#myTabs").tabs("remove", parseInt($("#indexNum").val(),10));
    });

    $("#add").click(function() {
      $("#myTabs").tabs("add", "remoteTab.txt", "A New Tab!");
    });
});

  
function createtable() {
  if (!document.querySelector("table")) {
    const table = document.createElement("table");
    let minX, minY, maxX, maxY;
    minX = document.getElementById("minX").value;
    maxX = document.getElementById("maxX").value;
    minY = document.getElementById("minY").value;
    maxY = document.getElementById("maxY").value;
  
    const colarr = [];
    const rowarr = [];
    if (minY >= 0) {
      colarr.push(0);
    }
    if (minX >= 0) {
      rowarr.push(0);
    }

    for (let i = 1; i <= maxY; i++) {
      colarr.push(i);
    }
    for (let i = 1; i <= maxX; i++) {
      rowarr.push(i);
    }
  
    for (let i = 0; i < Number(rowarr.length); i++) {
      const rowX = document.createElement("tr");
      for (let j = 0; j < Number(colarr.length); j++) {
        const columnY = document.createElement("td");
        let val = rowarr[i] * colarr[j];
  
        if (i === 0 || j === 0) {
          val = rowarr[i] || colarr[j];
          columnY.classList.add("header");
        }
  
        if (i === 0 && j === 0) {
          val = "x";
        }
  
        columnY.innerHTML = val;
        rowX.appendChild(columnY);
      }
      table.appendChild(rowX);
    }

    const maintbl = document.getElementById("multtable");
    maintbl.appendChild(table);
    event.preventDefault();
  } else {
    document.querySelector("table").remove();
    createtable();
  }
}
