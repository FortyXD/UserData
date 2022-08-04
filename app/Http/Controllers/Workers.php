<?php

namespace App\Http\Controllers;

use App\Models\Country;
use App\Models\Job_Title;
use App\Models\Worker;
use Dflydev\DotAccessData\Data;
use Faker\Core\Number;
use Illuminate\Http\Request;
use mysql_xdevapi\Exception;
use PhpParser\Node\Scalar\String_;
use function PHPUnit\Framework\isNull;
use function Symfony\Component\String\b;

class Workers extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */


//      $Age  = response()->json($request->input('Age'))->original;
//    Если обьект будет пустым при dd() он выведет ArrayObject пустой, однако при проверке is_array() он выдает false. Что с этим делать.

//Есть также    $validatedData = $request->validate([ [). Что лучше, и когда лучше использовать это, нежели выше тип
    public function index()
    {
        $Data = Worker::all();
        foreach ($Data as $arr) {
            $arr->Country = Country::where('id', $arr->Country)->first()->Country;
            $arr->JobTitle = Job_Title::where('id', $arr->JobTitle)->first()->Job;
        }
        return $Data;
    }


    public function create(Request $request)
    {
        $validatedData = $request->validate([
            'FullName' => 'nullable',
            'Age' => 'nullable',
            'Email' => 'nullable',
            'PhoneNumber' => 'nullable',
            'Country' => 'nullable',
            'JobTitle' => 'nullable'

        ]);
        $Counrty = $validatedData['Country'];
        $Job = $validatedData['JobTitle'];

        $id_job = Job_Title::where('Job', $Job)->first();
        if ($id_job == null) {
            Job_Title::create(['Job' => $Job]);
            $id_job = Job_Title::where('Job', $Job)->first()->id;
        } else {
            $id_job = $id_job->id;
        }


        $id_Country = Country::where('Country', $Counrty)->first();
        if ($id_Country == null) {
            Country::create(['Country' => $Counrty]);
            $id_Country = Country::where('Country', $Counrty)->first()->id;
        } else {
            $id_Country = $id_Country->id;
        }


        $validatedData['Country'] = $id_Country;
        $validatedData['JobTitle'] = $id_job;


        Worker::create($validatedData);


//        $validated = $request->only(['FullName', 'Age']);
//       $Data = json_encode($validatedData);


//        $FullName = response()->json($request->input('FullName'))->original;
//
//        $Age  = response()->json($request->input('Age'))->original;
//        $Email = response()->json($request->input('Email'))->original;
//        $PhoneNumber = response()->json($request->input('PhoneNumber'))->original;
//        $Country = response()->json($request->input('Country'))->original;
//        $JobTitle = response()->json($request->input('JobTitle'))->original;


    }

    /**
     * Store a newly created resource in storage.
     *
     * @param \Illuminate\Http\Request $request
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
        $Data = Worker::where('id', $id)->first();
        $Data->Country = Country::where('id', $Data->Country)->first()->Country;
        $Data->JobTitle = Job_Title::where('id', $Data->JobTitle)->first()->Job;
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
            'FullName' => 'nullable',
            'Age' => 'nullable',
            'Email' => 'nullable',
            'PhoneNumber' => 'nullable',
            'Country' => 'nullable',
            'JobTitle' => 'nullable'
        ]);

        $Counrty = $validatedData['Country'];
        $Job = $validatedData['JobTitle'];

        $id_job = Job_Title::where('Job', $Job)->first();
        if ($id_job == null) {
            Job_Title::create(['Job' => $Job]);
            $id_job = Job_Title::where('Job', $Job)->first()->id;
        } else {
            $id_job = $id_job->id;
        }


        $id_Country = Country::where('Country', $Counrty)->first();
        if ($id_Country == null) {
            Country::create(['Country' => $Counrty]);
            $id_Country = Country::where('Country', $Counrty)->first()->id;
        } else {
            $id_Country = $id_Country->id;
        }


        $validatedData['Country'] = $id_Country;
        $validatedData['JobTitle'] = $id_job;

        Worker::where('id', $id)->update($validatedData);
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


    public function find_key(Request $request)
    {
        $Key = response()->json($request->input('Title'))->original;
        switch ($Key) {
            case 'Country':
                return Country::all();
            case 'Job':
                return Job_Title::all();
            default:
                return 0;
        }


    }

    public function ChangeId(Request $request)
    {
        $A = $request->all();

        switch ($A['Table']) {
            case 'Country':
                Country::where('id', $A['id'])->update([
                    'Country' => $A['New']
                ]);
                break;
            case 'Job':
                Job_Title::where('id', $A['id'])->update([
                    'Job' => $A['New']
                ]);
                break;
        }
    }

    public function Delete_key(Request $request)
    {
        $Vale = response()->json($request->input('Val'))->original;
        $Table = response()->json($request->input('Table'))->original;
        switch ($Table) {
            case 'Country':
                $Id = Country::where('Country', $Vale)->first()->id;
                Worker::where('Country', $Id)->delete();
                Country::where('id', $Id)->delete();
                break;
            case 'Job':
                $Id = Job_Title::where('Job', $Vale)->first()->id;
                Worker::where('JobTitle', $Id)->delete();
                Job_Title::where('id', $Id)->delete();
        }

    }


    public function CheckId(Request $request)
    {

        $A = $request->all();
        switch ($A['Table']) {
            case 'Country':
                if (Country::where('id', $A['id'])->first()->Country == $A['Old']) return true;
                else return Country::where('id', $A['id'])->first()->Country;
                break;
            case 'Job':

                if (Job_Title::where('id', $A['id'])->first()->Job == $A['Old']) {return true;}
                else {
                    return  Job_Title::where('id', $A['id'])->first()->Job;
                }
        }

    }
}


