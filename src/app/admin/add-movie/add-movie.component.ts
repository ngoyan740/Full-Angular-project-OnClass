import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from "@angular/forms";
import { MovieService} from 'src/app/core/service/movie.service';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.scss']
})
export class AddMovieComponent implements OnInit {
  form: FormGroup = new FormGroup({
    tenPhim: new FormControl(''),
    biDanh: new FormControl(''),
    trailer: new FormControl(''),
    hinhAnh: new FormControl(''),
    moTa: new FormControl(''),
    ngayKhoiChieu: new FormControl(''),

  });


  constructor(private movieService : MovieService) { }

  ngOnInit(): void {
  }

  handleChangeFile(evt: any) {
    const file = evt.target.files[0];
    //setValue cho hình ảnh : bắt buộc thay đổi toàn bộ giá trị form (form có các input có giá trị, phải thay đổi tất cả)
    //patchValue : thay đổi 1 hoặc nhiều giá trị trong form
    this.form.patchValue({'hinhAnh' : file})
  }

  handleSubmit(){
    console.log(this.form);
    this.movieService.addMovie(this.form.value).subscribe()
  }

}
