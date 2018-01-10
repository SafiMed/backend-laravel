<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

/**
 * @property int $id
 * @property string $productName
 * @property float $buyPrice
 * @property string $productImage
 * @property string $created_at
 * @property string $updated_at
 */
class Shop extends Model
{
    /**
     * @var array
     */
    protected $fillable = ['productName', 'buyPrice', 'productImage', 'created_at', 'updated_at'];
    /*
    public function user(){
    	return $this->belongsTo('App\User');
    }*/
}
