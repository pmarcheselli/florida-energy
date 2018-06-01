console.log("hello")

var logos = [
  {
    name: "University of Florida",
    imgSource: "images/logo_01.jpg",
    url: "http://www.ufl.edu/"
  }, {
    name: "Florida State University",
    imgSource: "images/logo_02.jpg",
    url: "http://www.fsu.edu/"
  }, {
    name: "University of Central Florida",
    imgSource: "images/logo_03.jpg",
    url: "http://www.ucf.edu/"
  }, {
    name: "University of Southern Florida",
    imgSource: "images/logo_04.jpg",
    url: "http://www.usf.edu/"
  }, {
    name: "Florida A&M University",
    imgSource: "images/logo_05.jpg",
    url: "http://www.famu.edu/"
  }, {
    name: "Florida Atlantic Univeristy",
    imgSource: "images/logo_06.jpg",
    url: "http://www.fau.edu/"
  }, {
    name: "Florida Gulf Coast University",
    imgSource: "images/logo_07.jpg",
    url: "http://www.fgcu.edu/"
  }, {
    name: "Florida International University",
    imgSource: "images/logo_08.jpg",
    url: "http://www.fiu.edu/"
  }, {
    name: "New College of Florida", 
    imgSource: "images/logo_09.jpg",
    url: "http://www.ncf.edu/"
  }, {
    name: "University of North Florida",
    imgSource: "images/logo_10.jpg",
    url: "http://www.unf.edu/"
  }, {
    name: "University of West Florida",
    imgSource: "images/logo_11.jpg",
    url: "http://www.uwf.edu/"
  }, {
    name: "Florida Polytechnic",
    imgSource: "images/logo_12.jpg",
    url: "https://floridapolytechnic.org/"
  }
]

var app = new Vue({
  el: '#app',
  data: {
		universities: logos
	}
})