<?php

namespace App\Http\Controllers;

use App\Models\Worker;
use Faker\Core\Number;
use Illuminate\Http\Request;
use mysql_xdevapi\Exception;
use PhpParser\Node\Scalar\String_;
use function PHPUnit\Framework\isNull;

class Workers extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Worker::all();
    }


    public function create(Request $request)
    {
        $validatedData = $request->validate([
            'FullName'=>'nullable',
            'Age'=>'nullable',
            'Email'=>'nullable',
            'PhoneNumber'=>'nullable',
            'Country'=>'nullable',
            'JobTitle'=>'nullable'

        ]);
//        $validated = $request->only(['FullName', 'Age']);
//       $Data = json_encode($validatedData);



//        $FullName = response()->json($request->input('FullName'))->original;
//
//        $Age  = response()->json($request->input('Age'))->original;
//        $Email = response()->json($request->input('Email'))->original;
//        $PhoneNumber = response()->json($request->input('PhoneNumber'))->original;
//        $Country = response()->json($request->input('Country'))->original;
//        $JobTitle = response()->json($request->input('JobTitle'))->original;


        Worker::create($validatedData);
        return redirect('home');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *

     */
    public function FindById(Request $request)
    {
        $id = response()->json($request->input('id'))->original;
       $Data =  Worker::where('id', $id)->get();
        return ($Data);
    }

    /**
     * Show the form for editing the specified resource.
     *
     */
    public function edit(Request $request)
    {
        $id = response()->json($request->input('id'))->original;
        $validatedData = $request->validate([
            'FullName'=>'nullable',
            'Age'=>'nullable',
            'Email'=>'nullable',
            'PhoneNumber'=>'nullable',
            'Country'=>'nullable',
            'JobTitle'=>'nullable'
        ]);
        Worker::where('id', $id)->update($validatedData);
        return(true);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *


     */
    public function destroy(Request $request)
    {
        $id = response()->json($request->input('id'))->original;
        Worker::where('id', $id)->delete();
    }
}
