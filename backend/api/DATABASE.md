# Configuration de la Base de Données pour We Split

Ce document décrit les étapes nécessaires pour configurer la base de données PostgreSQL pour l'application We Split.

## Prérequis

Avant de commencer, assurez-vous d'avoir installé PostgreSQL sur votre système. Vous pouvez télécharger et installer PostgreSQL à partir de [https://www.postgresql.org/download/](https://www.postgresql.org/download/).

## Création de la Base de Données

1. Ouvrez un terminal et connectez-vous à PostgreSQL avec votre utilisateur PostgreSQL :

    ```bash
    psql -U [nom_utilisateur]
    ```

2. Une fois connecté, créez une nouvelle base de données pour We Split :

    ```sql
    CREATE DATABASE wesplit;
    ```

3. Créez un utilisateur pour cette base de données :

    ```sql
    CREATE USER wesplit_user WITH PASSWORD '[mot_de_passe]';
    ```

4. Attribuez les droits nécessaires à cet utilisateur sur la base de données :

    ```sql
    GRANT ALL PRIVILEGES ON DATABASE wesplit TO wesplit_user;
    ```

## Configuration de l'Application

Après avoir créé la base de données et l'utilisateur, mettez à jour le fichier de configuration de l'application (souvent un `.env` ou un fichier de configuration spécifique) avec les informations de la base de données.

Exemple de fichier `.env`:

```plaintext
DB_NAME=wesplit
DB_USER=wesplit_user
DB_PASS=[mot_de_passe]
DB_HOST=localhost
DB_PORT=5432
```

## Initialisation de la Base de Données

Pour initialiser la base de données avec les tables et structures nécessaires, exécutez les scripts SQL fournis dans le répertoire `sql` du projet.

```bash
psql -U wesplit_user -d wesplit -a -f path/to/initial_script.sql
```

## Sauvegarde et Restauration

### Sauvegarde

Pour sauvegarder la base de données :

```bash
pg_dump -U wesplit_user wesplit > backup.sql
```

### Restauration

Pour restaurer la base de données à partir d'un fichier de sauvegarde :

```bash
psql -U wesplit_user -d wesplit < backup.sql
```

---

Assurez-vous de remplacer `[nom_utilisateur]`, `[mot_de_passe]` et `path/to/initial_script.sql` par vos propres valeurs. Ce guide suppose une familiarité de base avec PostgreSQL et les systèmes de gestion de bases de données.
