<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class PreferredShopController extends Controller
{
    /**
     * Get shops which are liked for each user
     * @return list of shops
     */
    public function getPreferredShops(){
    	$shops = DB::table('shops')
        			->join('likedshops', 'shops.id', '=', 'likedshops.shop_id')
        			->join('users', 'users.id', '=', 'likedshops.user_id')
        			->select('shops.*')
        			->where([
        				['likedshops.user_id', auth()->user()->id],
        				['likedshops.liked', '1']
        			])->get();
        return response()->json($shops);
    }

    /**
     * this funtion allows user to remove a shop from the liked ones
     * @param  integer $id identifier of a shop
     * @return array     return a confirmation
     */
    public function removeShop($id){
        $idLikedShop = DB::table('likedshops')->where([
            ['user_id', auth()->user()->id],
            ['shop_id', $id]
        ])->first()->id;
        DB::table('likedshops')->where('id', $idLikedShop)->delete();        
        $response = array('response' => 'Shop Removed !', 'success' => true);
        return $response;
    }
}
