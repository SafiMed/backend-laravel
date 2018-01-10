<?php

use Illuminate\Database\Seeder;

class ShopsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('shops')->insert([
            'productName' => 'Shop 2',
            'buyPrice' => '18.25',
            'productImage' => '..\..\storage\app\public\image\shop2.png',
        ]);
    }
}
