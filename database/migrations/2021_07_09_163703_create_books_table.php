<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateBooksTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('books', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('author')->nullable();
            $table->longText('description')->nullable();
            $table->string('isbn')->nullable();
            $table->string('img')->nullable();
            $table->string('reading')->nullable();
            $table->unsignedInteger('year_of_publishing')->nullable();
            $table->unsignedInteger('rating')->default(0)->nullable();
            $table->unsignedInteger('type_book_id')->default(0);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('books');
    }
}
