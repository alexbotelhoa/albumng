<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use App\Post;

class PostController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return Post[]|\Illuminate\Database\Eloquent\Collection
     */
    public function index()
    {
        return Post::all();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $post = new Post();
        $path = Storage::disk('public')->put('imagens', $request->file);
        $post->name     = $request->name;
        $post->email    = $request->email;
        $post->title    = $request->title;
        $post->subtitle = $request->subtitle;
        $post->message  = $request->message;
        $post->file     = $path;
        $post->likes    = 0;
        $post->save();

        return response($post, 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return int
     */
    public function destroy($id)
    {
        $post = Post::find($id);
        if (isset($post)) {
            Storage::disk('public')->delete($post->file);
            $post->delete();
            return 204;
        }
        return response('Post não encontrado', 404);
    }

    public function likes($id)
    {
        $post = Post::find($id);
        if (isset($post)) {
            $post->likes++;
            $post->save();
            return $post;
        }
        return response('ID não encontrado', 404);
    }
}
