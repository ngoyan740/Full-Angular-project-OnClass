import { Injectable } from '@angular/core';
import { Movie, MovieDetail } from "../models/movie";
import { ApiService } from "./api.service";

import { Observable } from 'rxjs';

import { HttpParams } from '@angular/common/http' // Class gọi API trong agular

@Injectable({
  // Không cần import vào trong mảng provider của AppModule khi có providedIn: 'root'
  providedIn: 'root'
})
export class MovieService {

  constructor(private api: ApiService) {}

  getMovieList(): Observable<Movie[]> {
    const url = `/QuanLyPhim/LayDanhSachPhim`;

    let params = new HttpParams();
    params = params.append('maNhom', 'GP01')
    return this.api.get<Movie[]>(url, {params});
  }

  getMovieDetail(movieId: string) : Observable <MovieDetail>{
    const url = "/QuanLyPhim/LayThongTinPhim";

    let params = new HttpParams();
    params = params.append('maPhim', movieId);
    return this.api.get<MovieDetail>(url,{params});
  }

  addMovie(movie: any) : Observable<any> {
    const url = `QuanLyPhim/ThemPhimUploadHinh`;
    const formData = new FormData() ;

    for(let item in movie) {
      formData.append(item, movie[item]);
    }
    formData.append('maNhom', 'GP01');

    return this.api.post(url, formData);
  }

  // getMovieListPromise() : Promise<Movie[]> {
  //   return new Promise((resolve, rejects) => {
  //     setTimeout(() => {

  //       // rejects('Error catching');

  //       resolve([
  //         { id: 1, name: "SOUL", price: 8000, image: "assets/img/soul.jpg" },
  //         { id: 2, name: "INCREDIBLE", price: 9000, image: "assets/img/incredibles.jpeg" },
  //         { id: 3, name: "FINDING NEMO", price: 10000, image: "assets/img/nemo.jpeg" },
  //         { id: 4, name: "UP", price: 7000, image: "assets/img/up.jpeg" },

  //       ])
  //     }, 2000)
  //   })

   
  //   }

  //   getMovieListObservable(): Observable<Movie[]> {
  //     return new Observable(subscribe => {
  //       setTimeout(()=> {
  //         subscribe.next(
  //           [
  //             { id: 1, name: "SOUL", price: 8000, image: "assets/img/soul.jpg" },
  //             { id: 2, name: "INCREDIBLE", price: 9000, image: "assets/img/incredibles.jpeg" },
  //             { id: 3, name: "FINDING NEMO", price: 10000, image: "assets/img/nemo.jpeg" },
  //             { id: 4, name: "UP", price: 7000, image: "assets/img/up.jpeg" },
    
  //           ]
  //         )
  //         subscribe.complete()

  //       }, 2000);

        
  //     });
  // }
}
