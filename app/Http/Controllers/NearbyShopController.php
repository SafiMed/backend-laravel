<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;

class NearbyShopController extends Controller
{
    /**
     * Get shops which are disliked after two hours, or which have never been liked/disliked
     * @return list of shops
     */
    public function getNearbyShops(){
        //$shops = Shop::orderBy('productName')->get();
        $exists = DB::table('likedshops')->where('user_id', auth()->user()->id)->count();
        if($exists == 0){
            $shops = DB::table('shops')->get();
        }else{
            $idShops = DB::table('likedshops')
                        ->where([
                            ['user_id', auth()->user()->id],
                            ['liked', '1']
                        ])->orWhere([
                            ['user_id', auth()->user()->id],
                            ['liked', '0'],
                            ['show_on', '>', Carbon::now()]
                        ])->pluck('likedshops.shop_id'); 
            
            $shops = DB::table('shops')
                        ->whereNotIn('shops.id', $idShops)
                        ->get();
        }   	
		return response()->json($shops);
    }
   
   /**
    * this funtion allows user to like a shop
    * @param  integer $id identifier of a shop
    * @return array     return a confirmation
    */
    public function likeShop($id){
        DB::table('likedshops')->insert(['user_id' => auth()->user()->id,
                                         'shop_id' => $id,
                                         'liked' => '1']);
        $response = array('response' => 'Shop Liked !', 'success' => true);
        return $response;
    }

    /**
     * this funtion allows user to dislike a shop
     * @param  integer $id identifier of a shop
     * @return array     return a confirmation
     */
    public function dislikeShop($id){
        $exists = DB::table('likedshops')->where([
            ['user_id', auth()->user()->id],
            ['shop_id', $id]
        ])->count();
        $current_time = Carbon::now()->addHours(2);
        if($exists == 0){
            DB::table('likedshops')->insert(['user_id' => auth()->user()->id,
                                             'shop_id' => $id,
                                             'liked' => '0',
                                             'show_on' => $current_time]); 
        }else{
            DB::table('likedshops')->where([
                ['user_id', auth()->user()->id],
                ['shop_id', $id]
            ])->update(['show_on' => $current_time]);
        }

        $response = array('response' => 'Shop Disliked !', 'success' => true);
        return $response;
    }
}
