$(function(){

    var fishes;
    function capitalise(name) {
      const finalNames = name.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase());
      return finalNames;
    }
    
    fetch('https://api.fourteenfish.com/api/v2/developers/coding-task-data')
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          // todo: append data to the page
          console.log(data);
          //test: trying to return the data:
          // alert(data[1].id);

          fishes = data;

          // test
          // $('#option1').val() = fishes[0].id;

          // inspiration from stack overflow (https://stackoverflow.com/questions/170986/what-is-the-best-way-to-add-options-to-a-select-from-a-javascript-object-with-jq?rq=1)
          // selectValues = { "1": "test 1", "2": "test 2" };
          // for (key in selectValues) {
          //   if (typeof (selectValues[key] == 'string') ){
          //     $('#mySelect').append('<option value="' + key + '">' 
          //         + selectValues[key] + '</option>');
          //   }
          // }


          for (i=0; i<fishes.length; i++) {
                $('#select-fish')
                  .append($("<option></option>")
                  .attr("value", fishes[i].id)
                  .text(capitalise(fishes[i].name))); 
          };   

          //test: trying to insert data to the fish name section
          // $('#fish-name').html(fishes[0].name);                  

        }).catch(function (err) {
          // if there was an error:
          console.warn('Something went wrong.', err);
        });

    // function to capitalise the first letters of the names:


    $('#select-fish').on('change', function(){
        // todo: display relevant data
        //test: check if the function 'on-change' works:
        // alert($('#select-fish').val());
        //test: below was used to check/figure out how to pull the data/ and if the data is available globally:
        // $('#fish-name').html(fishes[4].name);
      for (i=0; i<fishes.length; i++) {
        //test: checking if the loop works and pulles the right values from the 'fishes':
        // alert(fishes[i].name); 
        if ($('#select-fish').val() == fishes[i].id) {
          //test: below 'alert' is used to check if the 'if statement' works as expected
          // alert('Hello');
          $('#fish-name').html(capitalise(fishes[i].name));
          $('.fish-description').html('Good choice! The ' + fishes[i].description);
          //cod has no src provided, below should ensure that there is a picture loaded on the page anyway
          if (fishes[i].id == 198 && fishes[i].image == ""){
            $('.fish-image').attr('src', 'https://youngsseafood.co.uk/wp-content/uploads/2017/06/atlantic-cod-612x235.png');
          } else {
            $('.fish-image').attr('src', fishes[i].image);
          }      
          //found a picuture of the seabass with transparent background
          if (fishes[i].id == 132 && fishes[i].image == "https://cdn.britannica.com/43/9443-050-5D22A052/Black-sea-bass.jpg"){
            $('.fish-image').attr('src', 'https://youngsseafood.co.uk/wp-content/uploads/2017/06/sea-bass-612x239.png')
          }
          //swapping to an image of mackerel with transparent background
          if (fishes[i].id == 157 && fishes[i].image == "https://s3.amazonaws.com/divcomplatform/seafoodsource.com/images/0c473c32fe2b29821e2153b89e8de385.jpeg"){
            $('.fish-image').attr('src', 'https://youngsseafood.co.uk/wp-content/uploads/2017/06/Mackerel.png')
          }
          //herrings picture is tall, to move it up I have used negative value in the top margin 
          if (fishes[i].id == 170 && fishes[i].image == "https://cdn2.webdamdb.com/1280_guAqnssccMN6.png?1523906515") {
            $('.fish-image').css('margin-top', '-70px');
          } else {
            $('.fish-image').css('margin-top', '10px');
          }
        }
      }
      //changing the wording of the fish-selector label
      $('#labelF').html('Why not choose another one?');
    });
})