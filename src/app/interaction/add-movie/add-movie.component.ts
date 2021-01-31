import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.scss']
})
export class AddMovieComponent implements OnInit {

  constructor() { }
  @Output() onAdd = new EventEmitter();


  handleAddMovie(nameMovie : string, priceMovie: string, imageMovie: FileList | null) {
    console.log(nameMovie, priceMovie, imageMovie);

    // Chuyển file về base64 để hiện thị ra UI (javascript thuần) 

    const fileReader = new FileReader();
    fileReader.readAsDataURL(imageMovie?.[0] as Blob); // Ép kiểu dạng Blob xử lý file nhị phân
    // Nhận vào 1 file, và chuyển thành base64 : là 1 chuỗi 

    // Vì hàm bất đồng bộ, thgian xử lý sẽ tùy thuộc vào kích thước image nên phải dùng .onload
    fileReader.onload = (event) => {
      // console.log(event);
        const movie = {
          id: Math.floor(Math.random()*100),
          name: nameMovie,
          price: parseInt(priceMovie),
          image: event?.target?.result
        }
        this.onAdd.emit(movie);

      
    }


   

  }


  ngOnInit(): void {
  }

}
