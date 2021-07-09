<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateBookReadingProgressTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('book_reading_progress', function (Blueprint $table) {
            $table->id();
            $table->unsignedInteger('book_id');
            $table->text('verdict')->nullable();
            $table->date('date');
            $table->unsignedInteger('progress_id')->default(3);

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
        Schema::dropIfExists('book_reading_progress');
    }
}
