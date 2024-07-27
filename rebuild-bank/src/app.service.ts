import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return `
      <html>
        <head>
          <style>
            body {
              background-color: blue;
              color: white;
              display: flex;
              justify-content: center;
              align-items: center;
              height: 100vh;
              margin: 0;
              font-family: Arial, sans-serif;
            }
            .container {
              text-align: center;
            }
            h1 {
              font-size: 3rem;
              margin-top: 20px;
            }
            .gear {
              position: relative;
              width: 100px;
              height: 100px;
              margin: 0 auto;
              background: black;
              border-radius: 50%;
              animation: spin 2s linear infinite;
              margin-bottom: 20px; /* Adicionado para espaço entre engrenagem e texto */
            }
            .gear::before, .gear::after {
              content: '';
              position: absolute;
              top: 50%;
              left: 50%;
              width: 80px;
              height: 80px;
              margin-top: -40px;
              margin-left: -40px;
              border-radius: 50%;
              background: blue;
              z-index: -1;
            }
            .gear::before {
              width: 60px;
              height: 60px;
              margin-top: -30px;
              margin-left: -30px;
              background: black;
            }
            .gear .teeth {
              position: absolute;
              top: 50%;
              left: 50%;
              width: 120px;
              height: 120px;
              margin-top: -60px;
              margin-left: -60px;
              background: transparent;
            }
            .gear .teeth::before, .gear .teeth::after {
              content: '';
              position: absolute;
              width: 20px;
              height: 40px;
              background: black;
            }
            .gear .teeth::before {
              top: -20px;
              left: 50%;
              margin-left: -10px;
            }
            .gear .teeth::after {
              left: -20px;
              top: 50%;
              margin-top: -20px;
              transform: rotate(90deg);
            }
            .gear .teeth:nth-child(1) {
              transform: rotate(30deg);
            }
            .gear .teeth:nth-child(2) {
              transform: rotate(60deg);
            }
            .gear .teeth:nth-child(3) {
              transform: rotate(90deg);
            }
            .gear .teeth:nth-child(4) {
              transform: rotate(120deg);
            }
            .gear .teeth:nth-child(5) {
              transform: rotate(150deg);
            }
            .gear .teeth:nth-child(6) {
              transform: rotate(180deg);
            }
            .gear .teeth:nth-child(7) {
              transform: rotate(210deg);
            }
            .gear .teeth:nth-child(8) {
              transform: rotate(240deg);
            }
            .gear .teeth:nth-child(9) {
              transform: rotate(270deg);
            }
            .gear .teeth:nth-child(10) {
              transform: rotate(300deg);
            }
            .gear .teeth:nth-child(11) {
              transform: rotate(330deg);
            }
            .gear .teeth:nth-child(12) {
              transform: rotate(360deg);
            }
            @keyframes spin {
              0% { transform: rotate(0deg); }
              100% { transform: rotate(360deg); }
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="gear">
              <div class="teeth"></div>
              <div class="teeth"></div>
              <div class="teeth"></div>
              <div class="teeth"></div>
              <div class="teeth"></div>
              <div class="teeth"></div>
              <div class="teeth"></div>
              <div class="teeth"></div>
              <div class="teeth"></div>
              <div class="teeth"></div>
              <div class="teeth"></div>
              <div class="teeth"></div>
            </div>
            <h1><br>rebuild bank<br></h1>
          </div>
        </body>
      </html>
    `;
  }
}
