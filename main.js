$(function(){
  var fishes;
    fetch('https://api.fourteenfish.com/api/v2/developers/coding-task-data')
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          // todo: append data to the page
          console.log(data);
          //trying to return the data:
          // alert(data[1].id);

          fishes = data;

          //trying to insert data to the fish name section
          // $('#fish-name').html(fishes[0].name);                  

        }).catch(function (err) {
          // if there was an error:
          console.warn('Something went wrong.', err);
        });

    $('#select-fish').on('change', function(){
        // todo: display relevant data
        //check if the function 'on-change' works:
        // alert($('#select-fish').val());
        //below was used to check/figure out how to pull the data/ and if the data is available globally:
        // $('#fish-name').html(fishes[4].name);
      for (i=0; i<fishes.length; i++) {
        //checking if the loop works and pulles the right values from the 'fishes':
        // alert(fishes[i].name); 
        if ($('#select-fish').val() == fishes[i].id) {
          //below 'alert' is used to check if the 'if statement' works as expected
          // alert('Hello');
          $('#fish-name').html(fishes[i].name);
          $('.fish-description').html(fishes[i].description);
          $('.fish-image').attr('src',fishes[i].image);
        }
      }
    });
})