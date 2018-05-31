console.log("hello")

var logos = [
  {name: "University of Florida",
   imgSource: "logo_01.jpg",
   url: "http://www.ufl.edu/"
  }, {name: "Florida State University",
   imgSource: "logo_02.jpg",
   url: "http://www.fsu.edu/"
  }, {name: "University of Central Florida",
   imgSource: "logo_03.jpg",
   url: "http://www.ucf.edu/"
  }, {name: "University of Southern Florida",
   imgSource: "logo_04.jpg",
   url: "http://www.usf.edu/"
  }, {name: "Florida A&M University",
   imgSource: "logo_05.jpg",
   url: "http://www.famu.edu/"
  }, {name: "Florida Atlantic Univeristy",
   imgSource: "logo_06.jpg",
   url: "http://www.fau.edu/"
  }, {name: "Florida Gulf Coast University",
   imgSource: "logo_07.jpg",
   url: "http://www.fgcu.edu/"
  }, {name: "Florida International University",
   imgSource: "logo_08.jpg",
   url: "http://www.fiu.edu/"
  }, {name: "New College of Florida", 
   imgSource: "logo_09.jpg",
   url: "http://www.ncf.edu/"
  }, {name: "University of North Florida",
   imgSource: "logo_10.jpg",
   url: "http://www.unf.edu/"
  }, {name: "University of West Florida",
   imgSource: "logo_11.jpg",
   url: "http://www.uwf.edu/"
  }, {name: "Florida Polytechnic",
   imgSource: "logo_12.jpg",
   url: "https://floridapolytechnic.org/"
  }
]

var app = new Vue({
  el: '#app',
  data: {
		universities: logos
	}
})