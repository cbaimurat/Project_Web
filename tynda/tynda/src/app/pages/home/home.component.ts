import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  public songCards = [
    {
      thumbnail: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fe%2Fe3%2FBillie_Holiday%252C_Downbeat%252C_New_York%252C_N.Y.%252C_ca._Feb._1947_%2528William_P._Gottlieb_04251%2529.jpg&tbnid=1s1c7jrTEb6gTM&vet=12ahUKEwjq_4y-h8j-AhURvioKHbS3DK4QMygAegQIARA8..i&imgrefurl=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FSong&docid=ARYzNj5tBogLxM&w=4936&h=5152&q=song%20wikipedia&ved=2ahUKEwjq_4y-h8j-AhURvioKHbS3DK4QMygAegQIARA8',
      title: 'My Universe',
      description: 'Kairat Nurtas, Zangar Nurtas'
    },
    {
      thumbnail: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fm.soundcloud.com%2Fb6uhbuzviwo2%2Fmy-universe&psig=AOvVaw0iYZR801ccvrOGmH8vwsl6&ust=1682609145311000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCKi18dftx_4CFQAAAAAdAAAAABAD',
      title: 'My Universe',
      description: 'Kairat Nurtas, Zangar Nurtas'
    },
    {
      thumbnail: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fm.soundcloud.com%2Fb6uhbuzviwo2%2Fmy-universe&psig=AOvVaw0iYZR801ccvrOGmH8vwsl6&ust=1682609145311000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCKi18dftx_4CFQAAAAAdAAAAABAD',
      title: 'My Universe',
      description: 'Kairat Nurtas, Zangar Nurtas'
    },
    {
      thumbnail: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fm.soundcloud.com%2Fb6uhbuzviwo2%2Fmy-universe&psig=AOvVaw0iYZR801ccvrOGmH8vwsl6&ust=1682609145311000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCKi18dftx_4CFQAAAAAdAAAAABAD',
      title: 'My Universe',
      description: 'Kairat Nurtas, Zangar Nurtas'
    },
    {
      thumbnail: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fm.soundcloud.com%2Fb6uhbuzviwo2%2Fmy-universe&psig=AOvVaw0iYZR801ccvrOGmH8vwsl6&ust=1682609145311000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCKi18dftx_4CFQAAAAAdAAAAABAD',
      title: 'My Universe',
      description: 'Kairat Nurtas, Zangar Nurtas'
    },
    {
      thumbnail: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fm.soundcloud.com%2Fb6uhbuzviwo2%2Fmy-universe&psig=AOvVaw0iYZR801ccvrOGmH8vwsl6&ust=1682609145311000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCKi18dftx_4CFQAAAAAdAAAAABAD',
      title: 'My Universe',
      description: 'Kairat Nurtas, Zangar Nurtas'
    },
    {
      thumbnail: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fm.soundcloud.com%2Fb6uhbuzviwo2%2Fmy-universe&psig=AOvVaw0iYZR801ccvrOGmH8vwsl6&ust=1682609145311000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCKi18dftx_4CFQAAAAAdAAAAABAD',
      title: 'My Universe',
      description: 'Kairat Nurtas, Zangar Nurtas'
    },
    {
      thumbnail: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fm.soundcloud.com%2Fb6uhbuzviwo2%2Fmy-universe&psig=AOvVaw0iYZR801ccvrOGmH8vwsl6&ust=1682609145311000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCKi18dftx_4CFQAAAAAdAAAAABAD',
      title: 'My Universe',
      description: 'Kairat Nurtas, Zangar Nurtas'
    },
    {
      thumbnail: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fm.soundcloud.com%2Fb6uhbuzviwo2%2Fmy-universe&psig=AOvVaw0iYZR801ccvrOGmH8vwsl6&ust=1682609145311000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCKi18dftx_4CFQAAAAAdAAAAABAD',
      title: 'My Universe',
      description: 'Kairat Nurtas, Zangar Nurtas'
    },
    {
      thumbnail: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fm.soundcloud.com%2Fb6uhbuzviwo2%2Fmy-universe&psig=AOvVaw0iYZR801ccvrOGmH8vwsl6&ust=1682609145311000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCKi18dftx_4CFQAAAAAdAAAAABAD',
      title: 'My Universe',
      description: 'Kairat Nurtas, Zangar Nurtas'
    },
  ]

  constructor() {}
  ngOnInit(): void {}
}
