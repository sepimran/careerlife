
       // Map Start
        $('.map')
          .gmap3({
          center:[23.161397,89.2262604,151],
          zoom:13,
          scrollwheel:false,
          mapTypeId: "shadeOfGrey", // to select it directly
          mapTypeControlOptions: {
            mapTypeIds: [google.maps.MapTypeId.ROADMAP, "shadeOfGrey"]
          }
        })
          .marker({
        position:[23.1610376,89.2209448],
        icon: 'http://maps.google.com/mapfiles/marker_green.png'
      })
        .styledmaptype(
          "shadeOfGrey",
          [
            {"featureType":"all","elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#000000"},{"lightness":10}]},
            {"featureType":"all","elementType":"labels.text.stroke","stylers":[{"visibility":"off"},{"color":""},{"lightness":0}]},
            {"featureType":"all","elementType":"labels.icon","stylers":[{"visibility":"on"}]},
            {"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#fff"},{"lightness":0}]},
            {"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#fff"},{"lightness":17},{"weight":1.2}]},
            {"featureType":"landscape","elementType":"geometry","stylers":[{"fff":"#fff"},{"lightness":20}]},
            {"featureType":"poi","elementType":"geometry","stylers":[{"color":"#fff"},{"lightness":21}]},
            {"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#FFDC36"},{"lightness":17}]},
            {"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#FFDC36"},{"lightness":29},{"weight":0.2}]},
            {"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#fff"},{"lightness":18}]},
            {"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#fff"},{"lightness":16}]},
            {"featureType":"transit","elementType":"geometry","stylers":[{"color":"#fff"},{"lightness":19}]},
            {"featureType":"water","elementType":"geometry","stylers":[{"color":"#AADAFF"},{"lightness":17}]}
          ],
          {name: "Shades of Grey"}
        );// Map End