<?php

namespace App\GraphQL\Queries;

use App\Models\BookReadingProgress;

class LastBookReadingProgress
{
    /**
     * @param  null  $_
     * @param  array<string, mixed>  $args
     */
    public function __invoke($_, array $args)
    {
        return BookReadingProgress::latest()->get();
    }
}
