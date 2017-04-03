<div class="row">

    <div class="col-sm-8">
        <?php
        $data = \App\Table\Article::getLast();
        foreach ($data as $post): ?>

            <h2><a href="<?= $post->url ?>"><?= $post->titre ?></a></h2>

            <p><em><?= $post->categorie ?></em></p>

            <p><?= $post->extrait ?></p>

        <?php endforeach; ?>
    </div>

    <div class="col-sm-4">

        <ul>
        <?php foreach (\App\Table\Categorie::all() as $categorie): var_dump($categorie); ?>

            <li><a href="<?= $categorie->url ?>"><?= $categorie->titre ?></a></li>

        <?php endforeach; ?>
        </ul>

    </div>

</div>
