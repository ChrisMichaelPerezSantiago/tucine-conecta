<template>
  <section class="header">
    <!--
    <div class="window__actions">
      <i class="ion-record red"></i>
      <i class="ion-record yellow"></i>
      <i class="ion-record green"></i>
    </div>
    -->
    <div class="page-flows">
     <div class="user__info">
        <span class="user__info__img">
          <img src="../../public/logo.png" alt="tu cine conecta" class="img-responsive" />
        </span>
    </div>  
    </div>

    <div class="user">
      <!--<div class="user__notifications">
        <i class="ion-android-notifications"></i>
      </div>
      <div class="user__inbox">
        <i class="ion-archive"></i>
      </div>-->

      <div class="user__info">
        <div class="search">
          <input type="text" placeholder="Buscar peliculas, series …" />
        </div>
        <span class="user__info__name">
          <span class="first"></span>
          <span class="last"></span>
        </span>
      </div>

      <div class="user__actions">
        <div class="dropdown">
          <button class="dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
            <i class="ion-chevron-down"></i>
          </button>
          <ul class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenu1">
            <li><a href="#">Private Session</a></li>
            <li><a href="#">Account</a></li>
            <li><a href="#">Settings</a></li>
            <li><a href="#">Log Out</a></li>
          </ul>
        </div>
      </div>
    </div>

  </section>
</template>