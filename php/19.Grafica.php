<?php

    class Barra {

        var $ancho;
        var $alto;
        var $imagen;
        var $profundidad;

        var $colorfondo;
        var $vectorcolorfondo;
        var $colorbarra;
        var $vectorcolorbarra;
        var $colorvalores;

        //almacena los valores y los titulos de cada barra
        var $datos;

        function sumar($valor,$titulo) {
            $indice=count($this->datos);
            $this->datos[$indice]['valor']=$valor;
            $this->datos[$indice]['titulo']=$titulo;
        }

        function fijarcolorfondo($rojo,$verde,$azul) {
            $this->vectorcolorfondo[0]=$rojo;
            $this->vectorcolorfondo[1]=$verde;
            $this->vectorcolorfondo[2]=$azul;
            $this->colorfondo=ImageColorAllocate($this->imagen,$this->vectorcolorfondo[0],$this->vectorcolorfondo[1],$this->vectorcolorfondo[2]);
            
            ImageFill($this->imagen,0,0,$this->colorfondo);
        }

        function fijarcolorbarra($rojo,$verde,$azul) {
            $this->vectorcolorbarra[0]=$rojo;
            $this->vectorcolorbarra[1]=$verde;
            $this->vectorcolorbarra[2]=$azul;
            $this->colorbarra=ImageColorAllocate($this->imagen,$this->vectorcolorbarra[0],		   $this->vectorcolorbarra[1],$this->vectorcolorbarra[2]);
        }

        function fijarprofundidad($profundidad) {
            $this->profundidad=$profundidad;
        }


        //Metodo privado
        function mayor() {
            $primera=true;
            $may=0;

            foreach ($this->datos as $val){

                if ($primera) {
                $primera=false;
                $may=$val['valor'];
                }
                
                if ($val['valor']>$may)
                    $may=$val['valor'];
            }
            
            return $may;
        }

        function graficarsombraizquierda($columna,$y1,$y2) {

        $rojo=$this->vectorcolorbarra[0]-90;
        if ($rojo<0)
                $rojo=0;
                $verde=$this->vectorcolorbarra[1]-90;
        
            if ($verde<0)
                $verde=0;
                $azul=$this->vectorcolorbarra[2]-90;
            
            if ($azul<0)
                $azul=0;

        $colorsombra=imageColorAllocate($this->imagen,$rojo,$verde,$azul);
        $puntos[]=$columna;
        $puntos[]=$y1;
        $puntos[]=$columna;
        $puntos[]=$y2;
        $puntos[]=$columna+$this->profundidad;
        $puntos[]=$y2-$this->profundidad;
        $puntos[]=$columna+$this->profundidad;
        $puntos[]=$y1-$this->profundidad;

        imagefilledpolygon($this->imagen,$puntos,4,$colorsombra);
        $colorbordebarra=imageColorAllocate($this->imagen,0,0,0);
        imagepolygon($this->imagen,$puntos,4,$colorbordebarra);
        }


        function graficarsombrasuperior($columna,$y1,$anchobarra) {
        
            $rojo=$this->vectorcolorbarra[0]-40;
            if ($rojo<0)
                $rojo=0;
                $verde=$this->vectorcolorbarra[1]-40;
            
            if ($verde<0)
                $verde=0;
                $azul=$this->vectorcolorbarra[2]-40;
        
            if ($azul<0)
                $azul=0;

        $colorsombra=imageColorAllocate($this->imagen,$rojo,$verde,$azul);
        $puntos[]=$columna;
        $puntos[]=$y1;
        $puntos[]=$columna+$anchobarra;
        $puntos[]=$y1;
        $puntos[]=$columna+$anchobarra+$this->profundidad;
        $puntos[]=$y1-$this->profundidad;
        $puntos[]=$columna+$this->profundidad;
        $puntos[]=$y1-$this->profundidad;

        imagefilledpolygon($this->imagen,$puntos,4,$colorsombra);
        $colorbordebarra=imageColorAllocate($this->imagen,0,0,0);
        imagepolygon($this->imagen,$puntos,4,$colorbordebarra);
        }

        function Barra($ancho,$alto) {
            $this->ancho=$ancho;
            $this->alto=$alto;
            $this->imagen=imageCreate($this->ancho,$this->alto);
            $this->vectorcolorfondo[0]=0;
            $this->vectorcolorfondo[1]=0;
            $this->vectorcolorfondo[2]=255;
            $this->colorfondo=ImageColorAllocate($this->imagen,$this->vectorcolorfondo[0],$this->vectorcolorfondo[1],$this->vectorcolorfondo[2]);
            
            ImageFill($this->imagen,0,0,$this->colorfondo);
            
            $this->vectorcolorbarra[0]=255;
            $this->vectorcolorbarra[1]=255;
            $this->vectorcolorbarra[2]=0;
            $this->colorbarra=ImageColorAllocate($this->imagen,$this->vectorcolorbarra[0],
            $this->vectorcolorbarra[1],$this->vectorcolorbarra[2]);
            $this->profundidad=10;
            $this->colorvalores=ImageColorAllocate($this->imagen,0,0,0);
        }

        function graficar() {
            $may=$this->mayor();
            $anchobarra=($this->ancho-110)/count($this->datos);
            $x1=10;
            $y1=$this->alto-50;
            $colorbordebarra=imageColorAllocate($this->imagen,0,0,0);
            
            foreach($this->datos as $reg) {

                $altura=($reg['valor']/$may)*($this->alto-80);
                imagefilledrectangle($this->imagen,$x1,$y1-$altura,$x1+$anchobarra,$y1,$this->colorbarra);
                imagerectangle($this->imagen,$x1,$y1-$altura,$x1+$anchobarra,$y1,$colorbordebarra);
                ImageString($this->imagen,2,$x1+3,$y1,$reg['titulo'],$this->colorbarra);
                $this->graficarsombraizquierda($x1+$anchobarra,$y1-$altura,$y1);
                $this->graficarsombrasuperior($x1,$y1-$altura,$anchobarra);
                ImageString($this->imagen,2,$x1+3,$y1-$altura+5,$reg['valor'],$this->colorvalores);
                $x1=$x1+$anchobarra+(100/count($this->datos));
            }
            
            Header ("Content-type: image/png");
            ImagePNG ($this->imagen,"encuesta.png");
            ImageDestroy($this->imagen);
        }
    }
?>